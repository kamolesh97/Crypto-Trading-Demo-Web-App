export type TradeCard = {
    name: string;
    type: string;
    leverage: number;
    outcome_time: Date;
    total_commitment_funds: number;
    total_commits: number;
    ticker_name: string;
};

export type assetPrices = {
    [key: string]: object;
};
