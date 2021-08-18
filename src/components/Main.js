import React from 'react'
import logo from "./portrait1.jpg";
import logo2 from "./portrait2.jpg";

const Main = () => {
    return (
        <div class="container-main">
        <div class="container-outer">
        {/* Splash page */}    
            <div class="container-inner fill-screen">
                <div class="intro-heading row fill-screen">
                    <div class="col-lg-5 col-xs-12" style={{height: "50vh"}}>
                        <h4 class="title-left intro-left">Hi, my name is <br></br>
                        <strong>Johnnie</strong><strong style={{color: "var(--primary-color)"}}>.
                        </strong></h4>
                    </div>
                    <div class="col-lg-7 col-xs-12 intro-right" style={{height: "50vh"}}>
                        <h4 class="title-right">I'm a <strong>Full Stack Developer </strong>
                        based in <br></br> 
                        Bournemouth, UK<span style={{color: "var(--primary-color)"}}>.</span>
                        <br></br><br></br><a class="work-link" href="#about">Check out my work
                        <span style={{color: "var(--primary-color)"}}>.</span></a>
                        </h4>
                    </div>
                </div>
            </div>
        {/* Projects section */}
        <div id ="about" class="container-inner fill-screen">
            <div class="row project-row">
                <div class="col-md-8" style={{marginTop: "auto"}}>
                <h3 class="project-header">About me<span style={{color: "var(--primary-color)"}}>.</span></h3>
                <p class="about-text">
My name is Johnnie.<br></br><br></br>

I am currently studying <strong>Software Engineering</strong> at <strong>Bournemouth University</strong>, expecting to graduate 2022.<br></br>

Outside of my time at University I enjoy working on projects to expand my knowledge on new fields which are not included in my course.
                </p>
                </div>
            </div>
            <div class="row about-row">
            <h3 class="project-header">Recent projects<span style={{color: "var(--primary-color)"}}>.</span></h3>
                <div class="row flex-row flex-nowrap overflow-auto">
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-text">My portfolio website</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-text">My portfolio website</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-text">My portfolio website</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-text">My portfolio website</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-text">My portfolio website</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-3 col-xs-4">
                    <div class="card">
                        <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"></img>
                        <div class="card-body">
                            <div style={{borderBottom: "solid 1px", borderColor: "grey", paddingBottom: "6px"}}>
                            <a class="card-links-a"><span class="iconify card-links" data-icon="bx:bx-git-branch"></span> Git repo</a>
                            <a class="card-links-a cl-hover"><span class="iconify card-links" data-icon="fluent:live-20-filled"></span> Try the live version</a>
                            </div>
                            <p class="card-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus enim, congue vitae ante at, malesuada pretium elit. Nullam in placerat orci, et tincidunt mauris. Cras at placerat risus, at facilisis quam. Duis malesuada, massa eu ultricies luctus, quam metus eleifend lectus, quis tristique neque lorem eu quam. Aenean pulvinar eget felis at commodo. Aenean pretium suscipit sapien sed iaculis. Curabitur congue suscipit nisi, at ultricies est maximus sit amet. Sed vitae dignissim magna, nec fringilla neque. Duis accumsan suscipit velit.

Aliquam nunc ipsum, porta sit amet ante nec, sollicitudin volutpat turpis. Suspendisse laoreet massa et massa mollis, sed congue massa sollicitudin. Praesent et sodales neque. Nunc semper eleifend viverra. Aliquam vestibulum est a risus mollis consequat. Nullam vel tempor velit. Vestibulum feugiat tincidunt turpis, et sagittis nibh fringilla at. Nullam sed ornare lorem, eu aliquet dui. Donec fermentum elit quis risus vehicula, id dictum enim lobortis. Mauris aliquam, nisi sed vehicula sagittis, ex augue auctor lectus, eget fringilla nibh diam rutrum ipsum. Nulla hendrerit, velit ut tempor suscipit, sapien lacus hendrerit eros, ut pretium sem orci a orci. Mauris ipsum est, consequat in lorem non, volutpat dignissim dolor. Mauris ut orci ac turpis pretium viverra et cursus velit.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Sidebar */}
        </div>
        <div class="li side-links">
                <a class="ul nav-link social-link" href="https://www.linkedin.com/in/johnnie-k-b74690116/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a class="ul nav-link social-link" href="https://github.com/johnniekf" target="_blank"><i class="fab fa-github"></i></a>
                <a class="ul nav-link social-link" href="mailto:johnniekennedyfoote@gmail.com"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
    )
}

export default Main
