export type Galaxy = {
	name: string
}

export type Planet = {
	galaxy: Galaxy,
	name: string,
	position: Array<number>
}

export type Ship = {
	id: string,
	from: Planet,
	to: Planet,
	departure: Date,
}

export type Ticket = {
	id: number,
	from: Planet,
	to: Planet,
	ship: Ship,
	status: string,
	price: number
}

export type User = {
	id: string,
	username: string,
	email: string,
	tickets: Ticket[]
}

export const STATES = {
  LOAD: "load",
  WELCOME: "welcome",
  REGISTER: "regitser",
  LOGIN: "login",
  DASHBOARD: "dashboard",
  BOOK: "book",
  LIST: "list",
	PROFILE: "profile",
	AVAILABLE: "available",
	SEAT: "seat",
	CONFIRM: "confirm",
	PAYMENT: "payment",
	PASS: "pass"
};

