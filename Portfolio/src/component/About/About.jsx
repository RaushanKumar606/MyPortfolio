const About = ()=>{
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col mt-5">
                    <img src="/Image/about.jpg" alt=""
                      style={{
                        height: "400px",
                        width: "300px",
                        borderRadius: "3%",
                        border: "2px solid 001f3f",
                      }}
                    />
                </div>
                <div className="col mt-5">
                <h1 className="text-center gradient-text">
                        About <span>Me!</span></h1>
                    <h3>Full Stack Developer & Software Developer</h3>
                    <p>Final-Year CSE Undergraduate Student At GTU,Gujarat. I Have A Keen Interest In Both Web Development And software Developer. I Enjoy Playing Video Games, Finding Them Not Only Entertaining But Also A Source Of Inspiration For Problem-Solving And Creativity. It Also Helps Me To Increase My Concentration. I Also Listen To Music In My Free Time.

Read more</p>
                </div>
            </div>
        </div>
    )
}
export {About}