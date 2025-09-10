import { createSlice } from '@reduxjs/toolkit';
import checkIcon from '@assets/images/check.svg';
import errorIcon from '@assets/images/error.svg';
import infoIcon from '@assets/images/info.svg';
import warningIcon from '@assets/images/warning.svg';
import { cloneDeep, uniqBy } from 'lodash';

const initialState = [];
let list = [];
const toastIcons = {
  success: { icon: checkIcon, color: '#5cb85c' },
  error: { icon: errorIcon, color: '#d9534f' },
  info: { icon: infoIcon, color: '#5bc0de' },
  warning: { icon: warningIcon, color: '#f0ad4e' },
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const { message, type } = action.payload;
      const toast = toastIcons[type];
      const toastItem = {
        id: state.length,
        description: message,
        type,
        icon: toast[type],
        backgroundColor: toast.color,
      };
    list = cloneDeep(list);
    list.unshift(toastItem);
    list = [...uniqBy(list, 'description')];
    return list;
    },
    clearNotification:()=>{
        list=[];
        return [];
    }
  }
});

export const { addNotification ,clearNotification} = notificationsSlice.actions;
export default notificationsSlice.reducer;
