export class Store {
	getState(id) {
		const store = sessionStorage.getItem(id);

		if (!store) {
			const initStore = {};

			sessionStorage.setItem(id, JSON.stringify(initStore));
			return initStore;
		}

		return JSON.parse(store);
	}

	setState(id, entity) {
		const state = this.getState(id);

		sessionStorage.setItem(id, JSON.stringify(Object.assign({}, state, { [entity.id]: entity })));
	}
}
