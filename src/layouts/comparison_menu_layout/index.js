import MenuLink from "@/components/menuLink"

function Layout({children}) {
  return (
    <div className='h-screen w-screen bg-white/40 flex justify-center items-center'>
        <div className='w-full max-w-[600px] bg-white rounded shadow-manu overflow-hidden'>
            <div className="grid grid-cols-2">
                <MenuLink link={"/"} text={"Converter"}/>
                <MenuLink link={"/currencies"} text={"Currencies"}/>
            </div>
            {children}
        </div>
    </div>
  )
}

export const WithLayout = (Component) => {
    return function WithLayoutComponent(props){
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    } 
}

