import React from 'react';
import { Theme } from '../themes/index';

function FamilyTree({ id, familyTreeName }) {

    const handleFamilyTree = () => {
        alert('navigate');
    }
    const handleAddFamilyTree = () => {
        alert('add');
    }
    const handleDeleteFamilyTree = () => {
        alert('delete');
    }

    return (
        <div className='h-52 w-52 flex flex-col p-1 gap-1 justify-between text-center border rounded-md border-textColor transition-all duration-300 hover:scale-105'>
            <button onClick={handleFamilyTree} className='h-full'>
                <h1>{familyTreeName}'s Family Tree</h1>
            </button>
            <div className='flex gap-2'>
                <button onClick={handleAddFamilyTree} className="relative group flex px-8 py-2 justify-center items-center text-center border rounded-sm border-textColor bg-bgColor text-black overflow-hidden" >
                    <span className='relative z-10 text-inherit transition-all duration-200 group-hover:text-white'><h1>Add</h1></span>
                    <span style={{ backgroundColor: Theme.color }} className="absolute inset-0 transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full"></span>
                </button>
                <button onClick={handleDeleteFamilyTree} className="relative group flex px-8 py-2 justify-center items-center text-center border rounded-sm border-textColor bg-bgColor text-black overflow-hidden" >
                    <span className='relative z-10 text-inherit transition-all duration-200 group-hover:text-white'><h1>Delete</h1></span>
                    <span style={{ backgroundColor: Theme.color }} className="absolute inset-0 transition-all duration-300 transform translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full"></span>
                </button>
            </div>
        </div>
    )
}

export default FamilyTree;
