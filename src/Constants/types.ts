export type TradeCard = {
    name: string;
    type: string;
    leverage: string;
    outcome_time: Date;
    total_commitment_funds: string;
    total_commits: number;
    ticker_name: string;
};

export type assetPrices = {
    [key: string]: object;
};
