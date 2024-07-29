import '../components/button.css'

export const Btn = (props) =>{
    const {children} = props
 return (
    <>
        <button className='btn1-comp'>{children} </button>
    </>
 )
}

export const Btn2 = (props) =>{
    const {children} = props
 return (
    <>
        <button className='btn2-comp'>{children} </button>
    </>
 )
}