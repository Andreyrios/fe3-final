function reducerDentist(state, action) {
    switch (action.type) {

            case ACTIONS.SET_DENTISTS:
                 localStorage.setItem('dentists', JSON.stringify(action.payload.dentists));
                 return { ...state, dentists: action.payload.dentists };
            case ACTIONS.GET_DENTISTS:
                const storedDentists = localStorage.getItem('dentists');
                return { ...state, dentists: storedDentists ? JSON.parse(storedDentists) : [] };
            case ACTIONS.ADD_DENTIST:
                const updatedDentists = [...state.dentists, action.payload.dentist];
                localStorage.setItem('dentists', JSON.stringify(updatedDentists));
                return { ...state, dentists: updatedDentists };
    }
  }