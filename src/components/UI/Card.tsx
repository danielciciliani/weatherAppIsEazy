
function Card({children}) {
    return (
        <div 
        className='border-1 rounded-2xl p-10 mt-10'>
            {children}
        </div>
    );
}

export default Card;