import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { handleRequest } from 'Utils'
// import coinGeckoService from 'Services/Instances/ExampleService'

// state type
export type ExampleState = {
  keyName: string;
  tokenAccess: string;
};

// payload type
export type UpdateExampleSlice = {
  newValue: string;
};

// init state
const initialState: ExampleState = {
  keyName: "",
  tokenAccess: "",
};

// thunk action
// const asyncExample = createAsyncThunk(
//   'example/asyncAction',
//   async (arg: any) => {
//     const [res, error] = await handleRequest(coinGeckoService.getListCoin())
//     if (error) return 'error'
//     return 'success'
//   }
// )

// slice create
// @ts-ignore
export const ExampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    updateExampleSlice: (
      state: ExampleState,
      action: PayloadAction<UpdateExampleSlice>
    ) => {
      state.keyName = action.payload.newValue;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(asyncExample.fulfilled, (state, action) => {
  //     state.keyName = action.payload
  //   })
  // },
});

// normal flow action
export const exampleSliceActions = { ...ExampleSlice.actions };

// export
export default ExampleSlice.reducer;
