

const Element = (props) => {

    return (
        props.items.map((obj) => {
            return <div className="container w-50 p-5 ">
                <ul className="list-group row d-flex ">
                    <li className=" col-11 list-group-item list-group-item-light border border-primary fw-bold d-flex justify-content-center ">{`${obj.name} (${obj.age} years old)`}</li>
                </ul>
            </div>
        })

    )
}
export default Element;