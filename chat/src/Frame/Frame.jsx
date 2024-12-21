import './Frame.css'
export default function Frame(){
    console.log("Frame")
    return(
        <>
            <div className='bar'>yellow</div>
            <div className="subFrame">
                <div className="navBar">red</div>
                <div className="list">
                    <button className='individualList'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLEEnTGbUuJhE1kWrBj7K3oPEpSROAlX_6A&s" className='ProfileImage'></img>
                        <h3 className='Name'> hello</h3>
                    </button>
                    <button className='individualList'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLEEnTGbUuJhE1kWrBj7K3oPEpSROAlX_6A&s" className='ProfileImage'></img>
                        <h3 className='Name'> hello</h3>
                    </button>
                    <button className='individualList'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLEEnTGbUuJhE1kWrBj7K3oPEpSROAlX_6A&s" className='ProfileImage'></img>
                        <h3 className='Name'> hello</h3>
                    </button>
                    <button className='individualList'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLEEnTGbUuJhE1kWrBj7K3oPEpSROAlX_6A&s" className='ProfileImage'></img>
                        <h3 className='Name'> hello</h3>
                    </button>
                    <button className='individualList'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLEEnTGbUuJhE1kWrBj7K3oPEpSROAlX_6A&s" className='ProfileImage'></img>
                        <h3 className='Name'> hello</h3>
                    </button>
                </div>
                <div className="text">green</div>
            </div>
        </>
    )
} 