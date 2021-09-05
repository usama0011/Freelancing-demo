function Dashboardmenu({Icon,title}) {
    return (
        <div className="flex text-white hidden md:inline-flex  font-bold cursor-pointer  items-center">
            <p>{title}</p>
            {Icon &&(
              <Icon className="h-5"/>
            )}
        </div>
    )
}

export default Dashboardmenu
