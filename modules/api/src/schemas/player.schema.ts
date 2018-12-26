import { Field, Schema } from '@skimp/schema';
import { Required, StringType } from '@skimp/validation';

@Schema('player')
export class PlayerSchema {
    @Required
    @StringType
    @Field()
    public name: string;
}
