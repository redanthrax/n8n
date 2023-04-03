import type { IDataObject } from 'n8n-workflow';

export interface IOpportunity {
    affiliate_id?: number;
    contact?: IDataObject;
    custom_fields?: IDataObject[];
    date_created?: string;
    estimated_close_date?: string;
    id?: number;
    include_in_forcast?: number;
    last_updated?: string;
    next_action_date?: string;
    next_action_notes?: string;
    opportunity_notes?: string;
    opportunity_title?: string;
    projected_revenue_high?: number;
    projected_revenue_low?: number;
    stage?: IDataObject;
    user?: IDataObject;
}
