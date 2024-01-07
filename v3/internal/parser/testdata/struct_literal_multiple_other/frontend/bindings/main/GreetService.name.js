// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

import {Call} from '@wailsio/runtime';
/**
 * @typedef {import('./models').Person} Person
 */

/**
 * Greet does XYZ 
 * @function Greet
 * @param name {string}
 * @returns {Promise<string>}
 **/
export async function Greet(name) {
	return Call.ByName("main.GreetService.Greet", ...Array.prototype.slice.call(arguments, 0));
}

/**
 * NewPerson creates a new person 
 * @function NewPerson
 * @param name {string}
 * @returns {Promise<Person>}
 **/
export async function NewPerson(name) {
	return Call.ByName("main.GreetService.NewPerson", ...Array.prototype.slice.call(arguments, 0));
}
