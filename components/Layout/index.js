import Nav from '../Nav'
export default function Layout({children}){
    return (
        <div className="container mx-auto">
        <div><Nav/></div>
            {children}
        </div>
        

    )

}