// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

import {Call} from '@wailsio/runtime';
import {Title as servicesTitle} from '../services/models';

// Greet does XYZ
export async function Greet(name: string, title: servicesTitle) : Promise<string> {
	return Call.ByID(1411160069, name, title);
}

