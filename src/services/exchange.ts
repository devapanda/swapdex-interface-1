import {
    DecodedLogEvent,
    ExchangeContract,
    ExchangeEvents,
    ExchangeFillEventArgs,
    LogWithDecodedArgs,
} from '@0x/contract-wrappers';

interface SubscribeToFillEventsParams {
    exchange: ExchangeContract;
    fromBlock: number;
    toBlock: number;
    ethAccount: string;
    fillEventCallback: (log: LogWithDecodedArgs<ExchangeFillEventArgs>) => any;
    pastFillEventsCallback: (log: Array<LogWithDecodedArgs<ExchangeFillEventArgs>>) => any;
}

export const subscribeToFillEvents = ({
    exchange,
    fromBlock,
    toBlock,
    ethAccount,
    fillEventCallback,
    pastFillEventsCallback,
}: SubscribeToFillEventsParams): string => {
    const subscription = exchange.subscribe(
        ExchangeEvents.Fill,
        { makerAddress: ethAccount },
        (err: Error | null, logEvent?: DecodedLogEvent<ExchangeFillEventArgs>) => {
            if (err || !logEvent) {
                // tslint:disable-next-line:no-console
                console.error('There was a problem with the ExchangeFill event', err, logEvent);
                return;
            }
            fillEventCallback(logEvent.log);
        },
    );

    exchange
        .getLogsAsync<ExchangeFillEventArgs>(
            ExchangeEvents.Fill,
            {
                fromBlock,
                toBlock,
            },
            {
                makerAddress: ethAccount,
            },
        )
        .then(pastFillEventsCallback);

    return subscription;
};
// TODO: Refactor to ethAccount become one single function
export const subscribeToFillEventsByFeeRecipient = ({
    exchange,
    fromBlock,
    toBlock,
    ethAccount,
    fillEventCallback,
    pastFillEventsCallback,
}: SubscribeToFillEventsParams): string => {
    const subscription = exchange.subscribe(
        ExchangeEvents.Fill,
        { feeRecipientAddress: ethAccount },
        (err: Error | null, logEvent?: DecodedLogEvent<ExchangeFillEventArgs>) => {
            if (err || !logEvent) {
                // tslint:disable-next-line:no-console
                console.error('There was a problem with the ExchangeFill event', err, logEvent);
                return;
            }
            fillEventCallback(logEvent.log);
        },
    );

    exchange
        .getLogsAsync<ExchangeFillEventArgs>(
            ExchangeEvents.Fill,
            {
                fromBlock,
                toBlock,
            },
            {
                feeRecipientAddress: ethAccount,
            },
        )
        .then(pastFillEventsCallback);

    return subscription;
};

export const subscribeToAllFillEvents = ({
    exchange,
    fromBlock,
    toBlock,
    fillEventCallback,
    pastFillEventsCallback,
}: SubscribeToFillEventsParams): string => {
    const subscription = exchange.subscribe(
        ExchangeEvents.Fill,
        {},
        (err: Error | null, logEvent?: DecodedLogEvent<ExchangeFillEventArgs>) => {
            if (err || !logEvent) {
                // tslint:disable-next-line:no-console
                console.error('There was a problem with the ExchangeFill event', err, logEvent);
                return;
            }
            fillEventCallback(logEvent.log);
        },
    );

    exchange
        .getLogsAsync<ExchangeFillEventArgs>(
            ExchangeEvents.Fill,
            {
                fromBlock,
                toBlock,
            },
            {},
        )
        .then(pastFillEventsCallback);

    return subscription;
};
