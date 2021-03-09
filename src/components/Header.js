import { Link } from 'gatsby'
import React from 'react'
import '../styles/main.css'

function Header() {
    return (
    // <div className="header mt-5">
    //     <div className="container header__container">
    //         <div className="header__logo">
    //             <a href="#">
    //                 <img className="header__img" src="https://xpcover.com/assets/images/logo1.png" />
    //             </a>
    //             <span/>
                    
    //         </div>
    //         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
    //             <span className="sr-only"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //         </button>
    //         <div className="header__menu">
    //             <nav id="navbar" className="header__nav collapse">
    //                 <ul className="header__elenco">
    //                     <li className="header__el">
    //                         <a href="#" className="header__link">INSURANCE</a>
    //                     </li>
    //                     <li className="header__el">
    //                         <a href="#" className="header__link">ABOUT XPcover</a>
    //                     </li>
    //                     <li className="header__el">
    //                         <a href="#" className="header__link">CLAIMS</a>
    //                     </li>
    //                     <li className="header__el header__el--blue">
    //                         <a href="" className="btn btn-white">Sign In →</a>
    //                     </li>
    //                 </ul>  
    //             </nav>
    //         </div>
    //     </div>
    // </div>
        
        <div className="header-wrapper header-wrapper--transparent" data-cms-attr="class:header_class" id="top-bar">
            <div className="main-header">
                <div className="hamburger-menu visible-xs">
                    <label className="nav-icon" htmlFor="flyout-menu-open">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </label>
                </div>
                <div className="logo">
                    <a href="/"><img alt="XPcover.com" data-cms-attr="src:logo_src" src="https://xpcover.com/assets/images/logo1.png"/></a>
                </div>
                <ul className="nav-items-left hidden-xs header-ver2">
                    <li className="nav-item-dropdown">
                        <span>Insurance</span>
                        <span className="menu-dropdown-font"></span>
                        <ul className="nav-list">
                            <li className="nav-sub-menu-item-dropdown">
                                <a id="motor-to-product">Car</a>
                                <span className="menu-dropdown-font"></span>

                                <ul className="nav-list">
                                    <li>
                                        <Link to="/carInsurance/">Car Insurance</Link>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/companies/">Companies</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/third-party-car-insurance/">Third party car insurance</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/comprehensive-car-insurance/">Comprehensive car insurance</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/car-insurance-premium-calculator/">Car insurance calculator</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/new/">New car insurance</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/zero-depreciation/">Zero Dep Car Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/buy-car-insurance/">Buy Car Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/car-insurance/compare-car-insurance-online/">Compare Car Insurance</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-sub-menu-item-dropdown">
                                <a id="two-wheeler-insurance">Bike</a>
                                <span className="menu-dropdown-font"></span>
                                <ul className="nav-list">
                                    <li>
                                        <a href="/bike-insurance/">Bike Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/">Two Wheeler Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/companies/">Companies</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/two-wheeler-insurance-claim/">Two Wheeler Insurance Claim</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/two-wheeler-insurance-premium-calculator/">Two Wheeler premium Calculator</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/third-party-two-wheeler-insurance/">Third party Bike insurance</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/companies/">Best Bike Insurance Companies</a>
                                    </li>
                                    <li>
                                        <a href="/two-wheeler-insurance/multiyear-bike-insurance/">Multiyear Bike Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/bike-insurance/buy-bike-insurance/">Buy Bike Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/bike-insurance/compare-bike-insurance/">Compare Bike Insurance</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-sub-menu-item-dropdown">
                                <a id="health-to-product">Health</a>
                                <span className="menu-dropdown-font"></span>
                                <ul className="nav-list">
                                    <li>
                                        <a href="/health-insurance/">Health Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/companies/">Companies</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/mediclaim-policy/">Mediclaim Policy</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/individual-health-insurance/">Individual Health Insurance plans</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/critical-illness-insurance/">Critical illness insurance</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/senior-citizens-health-insurance/">Senior citizen health insurance</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/arogya-sanjeevani-policy/">Arogya sanjeevani policy</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/buy-health-insurance/">Buy Health Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/health-insurance/health-insurance-comparison/">Compare Health Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/covid-plan/">Coronavirus Health insurance</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-sub-menu-item-dropdown">
                                <a id="term-to-product">Term</a>
                                <span className="menu-dropdown-font"></span>
                                <ul className="nav-list">
                                    <li>
                                        <Link to="/term-insurance/">Term Insurance</Link>
                                    </li>
                                    <li>
                                        <Link to="/term-insurance-companies/">Companies</Link>
                                    </li>
                                    <li>
                                        <Link to="/life-insurance/">Life Insurance</Link>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/life-insurance-calculator/">Life Insurance calculator</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/term-insurance/term-insurance-calculator/">Term Insurance calculator</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance-plans/">Life Insurance Plans</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/term-insurance/articles/1-crore-term-insurance/">1 crore term insurance</a>
                                    </li>
                                    <li>
                                        <a href="/term-insurance/term-insurance-comparison/">Compare Term Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/term-insurance/buy-term-insurance/">Buy Term Insurance</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance-renewals/">Term Insurance Renewals</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-sub-menu-item-dropdown">
                                <a id="ulip-to-product">Investment</a>
                                <span className="menu-dropdown-font"></span>
                                <ul className="nav-list">
                                    <li>
                                        <a href="/life-insurance/investment-plans/">Investment Plans</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/life-insurance-companies/">Companies</a>
                                    </li>
                                    <li>
                                        <a href="/investment-plans/">Buy Investment Plans</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/child-plan/">Child Plans</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/pension-plans/">Pension Plans</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/ulip-plans/">ULIP</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/endowment-plan/">Endowment Policy</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/investment-plans/best-tax-saving-investment-options/">Tax saving investment</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/ulip-plans/buy-ulip-plans/">Buy ULIP</a>
                                    </li>
                                    <li>
                                        <a href="/life-insurance/ulip-plans/best-ulip-plans/">Best ULIP</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item-dropdown">
                        <span>About XPcover</span>
                        <span className="menu-dropdown-font"></span>
                        <ul className="nav-list">

                            <li className="sub-menu-selected"><a href="/about/">About us</a></li>
                            
                            <li className="sub-menu-selected"><a href="/articles/">Insurance Blog</a></li>
                        </ul>
                    </li>
                    <li className="nav-item-dropdown">
                        <a className="open-claim-form" href="/submit-claim-request/">Claims</a>
                    </li>
                </ul>
                <ul className="nav-items-right">
                    <li className="hidden-xs">
                        <a className="open-contact-form" href="/contact/">Contact us</a>
                    </li>
                    <li>
                        <a className="open-login-form" href="/user-login/">
                            <span className="link-icon"></span>Login
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

Header.propTypes = {

}
export default Header

