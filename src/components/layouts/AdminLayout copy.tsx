import { Outlet } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import {increment, decrement} from '../../redux/features/counter/counterSlice';

export default function AdminLayout() {

    const dispatch = useDispatch();

    const count = useSelector((state: RootState) => state.counter.value); 
    
    return (
        <div>
            <h1>Admin Layout</h1>
            <h1>Admin Layout</h1>
            <h2>{count}</h2>
            <button 
                onClick={() => dispatch(increment())}
                className="text-2xl text-gray-100 bg-gray-500 mx-3 p-4 border rounded hover:bg-gray-600 text-gray-200"    
            >
                Increment
            </button>
            <button 
                onClick={() => dispatch(decrement())}
                className="text-2xl text-gray-100 bg-gray-500 p-4 border rounded hover:bg-gray-600 text-gray-200"
            >
                Decrement
            </button>
            <Outlet />
        </div>
    )
}