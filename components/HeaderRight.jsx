function HeaderRight({Icon,title}) {
    return (
        <div className="flex items-center text-gray-300">
          {Icon && (
              <Icon className=" h-5 mr-1"/>
          )}
            <p>{title}</p>
        </div>
    )
}

export default HeaderRight
