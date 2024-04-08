// custom header
class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Topbar Start -->
        <div class="container-fluid d-none d-lg-block">
            <div class="row align-items-center py-4 px-xl-5">
                <div class="col-lg-3">
                    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                        <img class="site-logo " src="img/msau-logo-tp.png" alt="">
                    </a>
                </div>
                <div class="col-lg-3 text-right">
                    <div class="d-inline-flex align-items-center">
                        <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div class="text-left">
                            <h6 class="font-weight-semi-bold mb-1">Location</h6>
                            <small>Bombo Kalule Kibamba</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 text-right">
                    <div class="d-inline-flex align-items-center">
                        <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
                        <div class="text-left">
                            <h6 class="font-weight-semi-bold mb-1">Email Us</h6>
                            <small>msaupresident@gmail.com</small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 text-right">
                    <div class="d-inline-flex align-items-center">
                        <i class="fa fa-2x fa-phone text-primary mr-3"></i>
                        <div class="text-left">
                            <h6 class="font-weight-semi-bold mb-1">Call Us</h6>
                            <small>+256 776217496 / +256 702217496</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
    
        <!-- Navbar Start -->
        <div class="container-fluid">
            <div class="row border-top px-xl-5">
                <div class="col-lg-3 d-none d-lg-block">
                    <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style="height: 67px; padding: 0 30px;">
                        <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Programs</h5>
                        <i class="fa fa-angle-down text-primary"></i>
                    </a>
                    <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 9;">
                        <div class="navbar-nav w-100">
                            <a href="capacity-building.html" class="nav-item nav-link">Capacity Building</a>
                            <a href="wal.html" class="nav-item nav-link">WAL</a>
                            <a href="career-guidance.html" class="nav-item nav-link">Career Guidance</a>
                        </div>
                    </nav>
                </div>
                <div class="col-lg-9">
                    <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="index.html" class="navbar-brand text-decoration-none d-block d-lg-none">
                            <img class="site-logo " src="img/msau-logo-tp.png" alt="">
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav py-0">
                                <a href="index.html" class="nav-item nav-link">Home</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">About Us</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="our-profile.html" class="dropdown-item">Our Profile</a>
                                        <a href="our-structure.html" class="dropdown-item">Our Structure</a>
                                    </div>
                                </div>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Resources</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="events.html" class="dropdown-item">Events</a>
                                        <a href="news&annoucements.html" class="dropdown-item">News & Annocements</a>
                                        <a href="articles.html" class="dropdown-item">Blogs</a>
                                        <a href="testimonials.html" class="dropdown-item">Testimonials</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                                <a href="authentication.html" class="nav-item nav-link">Member</a>
                            </div>
                            <a class="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="donate.html">DONATE</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Navbar End -->
        `
    }
}
customElements.define('custom-header', CustomHeader)

// custom footer
class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style="margin-top: 90px;">
            <div class="row pt-5">
                <div class="col-lg-7 col-md-12">
                    <div class="row">
                        <div class="col-md-6 mb-5">
                            <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Contact</h5>
                            <p><i class="fa fa-map-marker-alt mr-2"></i>Bombo Kalule Kibamba</p>
                            <p><i class="fa fa-phone-alt mr-2"></i>+256 776217496 / +256 702217496</p>
                            <p><i class="fa fa-envelope mr-2"></i>msaupresident@gmail.com</p>
                            <div class="d-flex justify-content-start mt-4">
                                <a target="_blank" class="btn btn-outline-light btn-square mr-2" href="https://x.com/msa_of_ug?t=l3wbi17h3bRsH_5FE0HKKw&s=08"><i class="fab fa-twitter"></i></a>
                                <a target="_blank" class="btn btn-outline-light btn-square mr-2" href="https://facebook.com/groups/msauganda/?mibextid=rS40aB7S9Ucbxw6v "><i class="fab fa-facebook-f"></i></a>
                                <a target="_blank" class="btn btn-outline-light btn-square" href="https://www.instagram.com/msa_of_ug?igsh=MTRzNG9qd2dldHpkeA=="><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="col-md-6 mb-5">
                            <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">Quick Links</h5>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white mb-2" href="our-profile.html"><i class="fa fa-angle-right mr-2"></i>About</a>
                                <a class="text-white mb-2" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Contact</a>
                                <a class="text-white mb-2" href=""><i class="fa fa-angle-right mr-2"></i>Members</a>
                                <a class="text-white mb-2" href=""><i class="fa fa-angle-right mr-2"></i>Donate</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 mb-5">
                    <h5 class="text-primary text-uppercase mb-4" style="letter-spacing: 5px;">msau</h5>
                    <p>MSAU is a vibrant association that mobilizes and sensitizes the Muslim students to lead an Islamic life, participate in and contribute towards programmes aimed at moving the Muslim community forward through promotion of education, good leadership and moral uprightness, using the Qur'an and Sunnah as supreme sources of guidance</p>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style="border-color: rgba(256, 256, 256, .1) !important;">
            <div class="row">
                <div class="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0 text-white">&copy; <a href="#">MSAU-All Rights Reserved</a>
                    </p>
                </div>
                <div class="col-lg-6 text-center text-md-right">
                    <ul class="nav d-inline-flex">
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="privacy.html">Privacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="terms.html">Terms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white py-0" href="faqs.html">FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Footer End -->
    
    
        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-double-up"></i></a>    
        `
    }
}
customElements.define('custom-footer', CustomFooter)

// custom events
class CustomEvents extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- events start -->
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Events</h5>
                    <h1>Our Common Events</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-1.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="/events-articles/btc.html">Basic Training Course (BTC)</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-2.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="/events-articles/mtc.html">Masters Training Course (MTC)</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-2.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="/events-articles/tot.html">Trainers Of Trainees (TOT)</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-3.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="">Ramadhan Seminars</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-4.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="career-guidance.html">Career Guidance</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-5.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="">WAL and Health Camps</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="rounded overflow-hidden mb-2">
                            <img class="img-fluid" src="img/course-6.jpg" alt="">
                            <div class="bg-secondary p-4">
                                <div class="d-flex justify-content-between mb-3">
                                    <small class="m-0"><i class="fa fa-calendar text-primary mr-2"></i>Date</small>
                                    <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>Days</small>
                                </div>
                                <a class="h5" href="">Institutional Visits</a>
                                <div class="border-top mt-4 pt-4">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="m-0"><i class="fa fa-map-marker text-primary mr-2"></i>Location</h6>
                                        <h5 class="m-0">cost</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- events start -->
        `
    }
}
customElements.define('custom-events', CustomEvents)

// custom testimonials
class CustomtesTestimonials extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Testimonial Start -->
        <div class="container-fluid py-5">
            <div class="container py-5">
                <div class="text-center mb-5">
                    <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Testimonials</h5>
                    <h1>What People Say</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="owl-carousel testimonial-carousel">
                            <div class="text-center">
                                <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img class="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="">
                                <h5 class="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div class="text-center">
                                <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img class="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt="">
                                <h5 class="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div class="text-center">
                                <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img class="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="">
                                <h5 class="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div class="text-center">
                                <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img class="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="">
                                <h5 class="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                            <div class="text-center">
                                <i class="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                <h4 class="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
                                <img class="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="">
                                <h5 class="m-0">Client Name</h5>
                                <span>Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
        `
    }
}
customElements.define('custom-testimonials', CustomtesTestimonials)