export type StatisticsTypes = 'confidenceBand';

export class Statistics {
    id: number;
    settings: any;
    type: StatisticsTypes;
    variable: string;
    confidence: string;
    modifier: Function;
}
