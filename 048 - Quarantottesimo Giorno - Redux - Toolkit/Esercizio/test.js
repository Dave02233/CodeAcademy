import { store } from './store.js';
import { setFilter, removeFilter } from './features/filterSlice.js';
import { addPerson, removePerson } from './features/peopleSlice.js';
import { setFilteredPeople } from './features/filteredPeopleSlice.js';

const filterPeople = (store) => {
    return store.getState().people.filter(person => person.includes(store.getState().filter))
}

console.log(store.getState());

store.dispatch(setFilter('Da'));

console.log(store.getState());

store.dispatch(setFilteredPeople(filterPeople(store)));

console.log(store.getState());

store.dispatch(addPerson('Dante'));

console.log(store.getState());

store.dispatch(setFilteredPeople(filterPeople(store)))

console.log(store.getState());

