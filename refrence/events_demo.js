const EventEmmiter = require('events');

class People extends EventEmmiter {}

const people = new People();

people.on('event', () => {
	console.log('new day is coming');
});

people.emit('event');
people.emit('event');
people.emit('event');
