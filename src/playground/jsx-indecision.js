console.log('app.js is running')

//JSX - Javascript XML  

const app = {
    title: 'Indecison App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()  //Stops full page refresh

    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderIndecision()
    }
}

const removeAll = () => {
    app.options = []
    renderIndecision()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}



const renderIndecision = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            { app.options.length > 0 ? <p>{"Here are your options"}</p> : <p>{"No options"}</p> }
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Button</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoute)
}





const appRoute = document.getElementById('app')

renderIndecision()