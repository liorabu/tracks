import createDataContext from './createDataContext';

const authReducer=(state,action)=>{
    switch (action.type) {
        default:
            // return state;
            break;
    }
};

const signup=(dispatch)=>{
    return({enail,password})=>{

    }
}

const signin = (dispatch)=>{
    return({enail,password})=>{

    }
}
const signout=(dispatch)=>{

}

export const {Context,Provider}=createDataContext(
    authReducer,
    {signup,signin,signout},
    {isSignedIn:false}
);