// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

import {Call} from '@wailsio/runtime';
import {Address} from './models';

// Yay does this and that
export async function Yay() : Promise<Address> {
	return Call.ByName("other.OtherService.Yay");
}

