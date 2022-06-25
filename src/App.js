import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        {/*wrapper*/}
        <div className="wrapper">
          {/*sidebar wrapper */}
          <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
              <div>
                <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
              </div>
              <div>
                <h4 className="logo-text">Synadmin</h4>
              </div>
              <div className="toggle-icon ms-auto"><i className="bx bx-first-page" />
              </div>
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon"><i className="bx bx-home" />
                  </div>
                  <div className="menu-title">Dashboard</div>
                </a>
                <ul>
                  <li> <a href="index.html"><i className="bx bx-right-arrow-alt" />Analytics</a>
                  </li>
                  <li> <a href="index2.html"><i className="bx bx-right-arrow-alt" />Sales</a>
                  </li>
                  <li> <a href="index3.html"><i className="bx bx-right-arrow-alt" />eCommerce</a>
                  </li>
                  <li> <a href="index4.html"><i className="bx bx-right-arrow-alt" />Alternate</a>
                  </li>
                  <li> <a href="index5.html"><i className="bx bx-right-arrow-alt" />Hospitality</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon"><i className="bx bx-spa" />
                  </div>
                  <div className="menu-title">Application</div>
                </a>
                <ul>
                  <li> <a href="app-emailbox.html"><i className="bx bx-right-arrow-alt" />Email</a>
                  </li>
                  <li> <a href="app-chat-box.html"><i className="bx bx-right-arrow-alt" />Chat Box</a>
                  </li>
                  <li> <a href="app-file-manager.html"><i className="bx bx-right-arrow-alt" />File Manager</a>
                  </li>
                  <li> <a href="app-contact-list.html"><i className="bx bx-right-arrow-alt" />Contatcs</a>
                  </li>
                  <li> <a href="app-to-do.html"><i className="bx bx-right-arrow-alt" />Todo List</a>
                  </li>
                  <li> <a href="app-invoice.html"><i className="bx bx-right-arrow-alt" />Invoice</a>
                  </li>
                  <li> <a href="app-fullcalender.html"><i className="bx bx-right-arrow-alt" />Calendar</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">UI Elements</li>
              <li>
                <a href="widgets.html">
                  <div className="parent-icon"><i className="bx bx-briefcase-alt-2" />
                  </div>
                  <div className="menu-title">Widgets</div>
                </a>
              </li>
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon"><i className="bx bx-cart-alt" />
                  </div>
                  <div className="menu-title">eCommerce</div>
                </a>
                <ul>
                  <li> <a href="ecommerce-products.html"><i className="bx bx-right-arrow-alt" />Products</a>
                  </li>
                  <li> <a href="ecommerce-products-details.html"><i className="bx bx-right-arrow-alt" />Product Details</a>
                  </li>
                  <li> <a href="ecommerce-add-new-products.html"><i className="bx bx-right-arrow-alt" />Add New Products</a>
                  </li>
                  <li> <a href="ecommerce-orders.html"><i className="bx bx-right-arrow-alt" />Orders</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-gift" />
                  </div>
                  <div className="menu-title">Components</div>
                </a>
                <ul>
                  <li> <a href="component-alerts.html"><i className="bx bx-right-arrow-alt" />Alerts</a>
                  </li>
                  <li> <a href="component-accordions.html"><i className="bx bx-right-arrow-alt" />Accordions</a>
                  </li>
                  <li> <a href="component-badges.html"><i className="bx bx-right-arrow-alt" />Badges</a>
                  </li>
                  <li> <a href="component-buttons.html"><i className="bx bx-right-arrow-alt" />Buttons</a>
                  </li>
                  <li> <a href="component-cards.html"><i className="bx bx-right-arrow-alt" />Cards</a>
                  </li>
                  <li> <a href="component-carousels.html"><i className="bx bx-right-arrow-alt" />Carousels</a>
                  </li>
                  <li> <a href="component-list-groups.html"><i className="bx bx-right-arrow-alt" />List Groups</a>
                  </li>
                  <li> <a href="component-media-object.html"><i className="bx bx-right-arrow-alt" />Media Objects</a>
                  </li>
                  <li> <a href="component-modals.html"><i className="bx bx-right-arrow-alt" />Modals</a>
                  </li>
                  <li> <a href="component-navs-tabs.html"><i className="bx bx-right-arrow-alt" />Navs &amp; Tabs</a>
                  </li>
                  <li> <a href="component-navbar.html"><i className="bx bx-right-arrow-alt" />Navbar</a>
                  </li>
                  <li> <a href="component-paginations.html"><i className="bx bx-right-arrow-alt" />Pagination</a>
                  </li>
                  <li> <a href="component-popovers-tooltips.html"><i className="bx bx-right-arrow-alt" />Popovers &amp; Tooltips</a>
                  </li>
                  <li> <a href="component-progress-bars.html"><i className="bx bx-right-arrow-alt" />Progress</a>
                  </li>
                  <li> <a href="component-spinners.html"><i className="bx bx-right-arrow-alt" />Spinners</a>
                  </li>
                  <li> <a href="component-notifications.html"><i className="bx bx-right-arrow-alt" />Notifications</a>
                  </li>
                  <li> <a href="component-avtars-chips.html"><i className="bx bx-right-arrow-alt" />Avatrs &amp; Chips</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-command" />
                  </div>
                  <div className="menu-title">Content</div>
                </a>
                <ul>
                  <li> <a href="content-grid-system.html"><i className="bx bx-right-arrow-alt" />Grid System</a>
                  </li>
                  <li> <a href="content-typography.html"><i className="bx bx-right-arrow-alt" />Typography</a>
                  </li>
                  <li> <a href="content-text-utilities.html"><i className="bx bx-right-arrow-alt" />Text Utilities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"> <i className="bx bx-atom" />
                  </div>
                  <div className="menu-title">Icons</div>
                </a>
                <ul>
                  <li> <a href="icons-line-icons.html"><i className="bx bx-right-arrow-alt" />Line Icons</a>
                  </li>
                  <li> <a href="icons-boxicons.html"><i className="bx bx-right-arrow-alt" />Boxicons</a>
                  </li>
                  <li> <a href="icons-feather-icons.html"><i className="bx bx-right-arrow-alt" />Feather Icons</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">Forms &amp; Tables</li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-hourglass" />
                  </div>
                  <div className="menu-title">Forms</div>
                </a>
                <ul>
                  <li> <a href="form-elements.html"><i className="bx bx-right-arrow-alt" />Form Elements</a>
                  </li>
                  <li> <a href="form-input-group.html"><i className="bx bx-right-arrow-alt" />Input Groups</a>
                  </li>
                  <li> <a href="form-layouts.html"><i className="bx bx-right-arrow-alt" />Forms Layouts</a>
                  </li>
                  <li> <a href="form-validations.html"><i className="bx bx-right-arrow-alt" />Form Validation</a>
                  </li>
                  <li> <a href="form-wizard.html"><i className="bx bx-right-arrow-alt" />Form Wizard</a>
                  </li>
                  <li> <a href="form-text-editor.html"><i className="bx bx-right-arrow-alt" />Text Editor</a>
                  </li>
                  <li> <a href="form-file-upload.html"><i className="bx bx-right-arrow-alt" />File Upload</a>
                  </li>
                  <li> <a href="form-date-time-pickes.html"><i className="bx bx-right-arrow-alt" />Date Pickers</a>
                  </li>
                  <li> <a href="form-select2.html"><i className="bx bx-right-arrow-alt" />Select2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-grid-alt" />
                  </div>
                  <div className="menu-title">Tables</div>
                </a>
                <ul>
                  <li> <a href="table-basic-table.html"><i className="bx bx-right-arrow-alt" />Basic Table</a>
                  </li>
                  <li> <a href="table-datatable.html"><i className="bx bx-right-arrow-alt" />Data Table</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">Pages</li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-lock-open-alt" />
                  </div>
                  <div className="menu-title">Authentication</div>
                </a>
                <ul>
                  <li> <a href="authentication-signin.html" target="_blank"><i className="bx bx-right-arrow-alt" />Sign In</a>
                  </li>
                  <li> <a href="authentication-signup.html" target="_blank"><i className="bx bx-right-arrow-alt" />Sign Up</a>
                  </li>
                  <li> <a href="authentication-signin-with-header-footer.html" target="_blank"><i className="bx bx-right-arrow-alt" />Sign In with Header &amp; Footer</a>
                  </li>
                  <li> <a href="authentication-signup-with-header-footer.html" target="_blank"><i className="bx bx-right-arrow-alt" />Sign Up with Header &amp; Footer</a>
                  </li>
                  <li> <a href="authentication-forgot-password.html" target="_blank"><i className="bx bx-right-arrow-alt" />Forgot Password</a>
                  </li>
                  <li> <a href="authentication-reset-password.html" target="_blank"><i className="bx bx-right-arrow-alt" />Reset Password</a>
                  </li>
                  <li> <a href="authentication-lock-screen.html" target="_blank"><i className="bx bx-right-arrow-alt" />Lock Screen</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="user-profile.html">
                  <div className="parent-icon"><i className="bx bx-user-pin" />
                  </div>
                  <div className="menu-title">User Profile</div>
                </a>
              </li>
              <li>
                <a href="timeline.html">
                  <div className="parent-icon"> <i className="bx bx-video-recording" />
                  </div>
                  <div className="menu-title">Timeline</div>
                </a>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-error" />
                  </div>
                  <div className="menu-title">Errors</div>
                </a>
                <ul>
                  <li> <a href="errors-404-error.html" target="_blank"><i className="bx bx-right-arrow-alt" />404 Error</a>
                  </li>
                  <li> <a href="errors-500-error.html" target="_blank"><i className="bx bx-right-arrow-alt" />500 Error</a>
                  </li>
                  <li> <a href="errors-coming-soon.html" target="_blank"><i className="bx bx-right-arrow-alt" />Coming Soon</a>
                  </li>
                  <li> <a href="error-blank-page.html" target="_blank"><i className="bx bx-right-arrow-alt" />Blank Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="faq.html">
                  <div className="parent-icon"><i className="bx bx-help-circle" />
                  </div>
                  <div className="menu-title">FAQ</div>
                </a>
              </li>
              <li>
                <a href="pricing-table.html">
                  <div className="parent-icon"><i className="bx bx-dollar-circle" />
                  </div>
                  <div className="menu-title">Pricing</div>
                </a>
              </li>
              <li className="menu-label">Charts &amp; Maps</li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-line-chart" />
                  </div>
                  <div className="menu-title">Charts</div>
                </a>
                <ul>
                  <li> <a href="charts-apex-chart.html"><i className="bx bx-right-arrow-alt" />Apex</a>
                  </li>
                  <li> <a href="charts-chartjs.html"><i className="bx bx-right-arrow-alt" />Chartjs</a>
                  </li>
                  <li> <a href="charts-highcharts.html"><i className="bx bx-right-arrow-alt" />Highcharts</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-map-pin" />
                  </div>
                  <div className="menu-title">Maps</div>
                </a>
                <ul>
                  <li> <a href="map-google-maps.html"><i className="bx bx-right-arrow-alt" />Google Maps</a>
                  </li>
                  <li> <a href="map-vector-maps.html"><i className="bx bx-right-arrow-alt" />Vector Maps</a>
                  </li>
                </ul>
              </li>
              <li className="menu-label">Others</li>
              <li>
                <a className="has-arrow" href="javascript:;">
                  <div className="parent-icon"><i className="bx bx-menu" />
                  </div>
                  <div className="menu-title">Menu Levels</div>
                </a>
                <ul>
                  <li> <a className="has-arrow" href="javascript:;"><i className="bx bx-right-arrow-alt" />Level One</a>
                    <ul>
                      <li> <a className="has-arrow" href="javascript:;"><i className="bx bx-right-arrow-alt" />Level Two</a>
                        <ul>
                          <li> <a href="javascript:;"><i className="bx bx-right-arrow-alt" />Level Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://codervent.com/synadmin/documentation/index.html" target="_blank">
                  <div className="parent-icon"><i className="bx bx-file" />
                  </div>
                  <div className="menu-title">Documentation</div>
                </a>
              </li>
              <li>
                <a href="https://themeforest.net/user/codervent" target="_blank">
                  <div className="parent-icon"><i className="bx bx-headphone" />
                  </div>
                  <div className="menu-title">Support</div>
                </a>
              </li>
            </ul>
            {/*end navigation*/}
          </div>
          {/*end sidebar wrapper */}
          {/*start header */}
          <header>
            <div className="topbar d-flex align-items-center bg-dark shadow-none border-light-2 border-bottom">
              <nav className="navbar navbar-expand">
                <div className="mobile-toggle-menu text-white me-3"><i className="bx bx-menu" />
                </div>
                <div className="top-menu-left d-none d-lg-block">
                  <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link text-white" href="app-emailbox.html"><i className="bx bx-envelope" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="app-chat-box.html"><i className="bx bx-message" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="app-fullcalender.html"><i className="bx bx-calendar" /></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="app-to-do.html"><i className="bx bx-check-square" /></a>
                    </li>
                  </ul>
                </div>
                <div className="search-bar flex-grow-1">
                  <div className="position-relative search-bar-box">
                    <form>
                      <input type="text" className="form-control search-control" autofocus placeholder="Type to search..." /> <span className="position-absolute top-50 search-show translate-middle-y"><i className="bx bx-search" /></span>
                      <span className="position-absolute top-50 search-close translate-middle-y"><i className="bx bx-x" /></span>
                    </form>
                  </div>
                </div>
                <div className="top-menu ms-auto">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item mobile-search-icon">
                      <a className="nav-link text-white" href="javascript:;">	<i className="bx bx-search" />
                      </a>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a className="nav-link dropdown-toggle dropdown-toggle-nocaret text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">	<i className="bx bx-category" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="row row-cols-3 g-3 p-3">
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-cosmic text-white"><i className="bx bx-group" />
                            </div>
                            <div className="app-title">Teams</div>
                          </div>
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-burning text-white"><i className="bx bx-atom" />
                            </div>
                            <div className="app-title">Projects</div>
                          </div>
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-lush text-white"><i className="bx bx-shield" />
                            </div>
                            <div className="app-title">Tasks</div>
                          </div>
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-kyoto text-dark"><i className="bx bx-notification" />
                            </div>
                            <div className="app-title">Feeds</div>
                          </div>
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-blues text-dark"><i className="bx bx-file" />
                            </div>
                            <div className="app-title">Files</div>
                          </div>
                          <div className="col text-center">
                            <div className="app-box mx-auto bg-gradient-moonlit text-white"><i className="bx bx-filter-alt" />
                            </div>
                            <div className="app-title">Alerts</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">7</span>
                        <i className="bx bx-bell" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                          <div className="msg-header">
                            <p className="msg-header-title">Notifications</p>
                            <p className="msg-header-clear ms-auto">Marks all as read</p>
                          </div>
                        </a>
                        <div className="header-notifications-list">
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-primary text-primary"><i className="bx bx-group" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">New Customers<span className="msg-time float-end">14 Sec
                                  ago</span></h6>
                                <p className="msg-info">5 new user registered</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">New Orders <span className="msg-time float-end">2 min
                                  ago</span></h6>
                                <p className="msg-info">You have recived new orders</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-success text-success"><i className="bx bx-file" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">24 PDF File<span className="msg-time float-end">19 min
                                  ago</span></h6>
                                <p className="msg-info">The pdf files generated</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-warning text-warning"><i className="bx bx-send" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Time Response <span className="msg-time float-end">28 min
                                  ago</span></h6>
                                <p className="msg-info">5.1 min avarage time response</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-info text-info"><i className="bx bx-home-circle" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">New Product Approved <span className="msg-time float-end">2 hrs ago</span></h6>
                                <p className="msg-info">Your new product has approved</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-danger text-danger"><i className="bx bx-message-detail" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">New Comments <span className="msg-time float-end">4 hrs
                                  ago</span></h6>
                                <p className="msg-info">New customer comments recived</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-success text-success"><i className="bx bx-check-square" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Your item is shipped <span className="msg-time float-end">5 hrs
                                  ago</span></h6>
                                <p className="msg-info">Successfully shipped your item</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-primary text-primary"><i className="bx bx-user-pin" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">New 24 authors<span className="msg-time float-end">1 day
                                  ago</span></h6>
                                <p className="msg-info">24 new authors joined last week</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="notify bg-light-warning text-warning"><i className="bx bx-door-open" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Defense Alerts <span className="msg-time float-end">2 weeks
                                  ago</span></h6>
                                <p className="msg-info">45% less alerts last 4 weeks</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a href="javascript:;">
                          <div className="text-center msg-footer">View All Notifications</div>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-large">
                      <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">8</span>
                        <i className="bx bx-comment" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:;">
                          <div className="msg-header">
                            <p className="msg-header-title">Messages</p>
                            <p className="msg-header-clear ms-auto">Marks all as read</p>
                          </div>
                        </a>
                        <div className="header-message-list">
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Daisy Anderson <span className="msg-time float-end">5 sec
                                  ago</span></h6>
                                <p className="msg-info">The standard chunk of lorem</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-2.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Althea Cabardo <span className="msg-time float-end">14
                                  sec ago</span></h6>
                                <p className="msg-info">Many desktop publishing packages</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-3.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Oscar Garner <span className="msg-time float-end">8 min
                                  ago</span></h6>
                                <p className="msg-info">Various versions have evolved over</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-4.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Katherine Pechon <span className="msg-time float-end">15
                                  min ago</span></h6>
                                <p className="msg-info">Making this the first true generator</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-5.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Amelia Doe <span className="msg-time float-end">22 min
                                  ago</span></h6>
                                <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-6.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Cristina Jhons <span className="msg-time float-end">2 hrs
                                  ago</span></h6>
                                <p className="msg-info">The passage is attributed to an unknown</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-7.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">James Caviness <span className="msg-time float-end">4 hrs
                                  ago</span></h6>
                                <p className="msg-info">The point of using Lorem</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Peter Costanzo <span className="msg-time float-end">6 hrs
                                  ago</span></h6>
                                <p className="msg-info">It was popularised in the 1960s</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-9.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">David Buckley <span className="msg-time float-end">2 hrs
                                  ago</span></h6>
                                <p className="msg-info">Various versions have evolved over</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-10.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Thomas Wheeler <span className="msg-time float-end">2 days
                                  ago</span></h6>
                                <p className="msg-info">If you are going to use a passage</p>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item" href="javascript:;">
                            <div className="d-flex align-items-center">
                              <div className="user-online">
                                <img src="assets/images/avatars/avatar-11.png" className="msg-avatar" alt="user avatar" />
                              </div>
                              <div className="flex-grow-1">
                                <h6 className="msg-name">Johnny Seitz <span className="msg-time float-end">5 days
                                  ago</span></h6>
                                <p className="msg-info">All the Lorem Ipsum generators</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <a href="javascript:;">
                          <div className="text-center msg-footer">View All Messages</div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="user-box dropdown border-light-2">
                  <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="assets/images/avatars/avatar-2.png" className="user-img" alt="user avatar" />
                    <div className="user-info ps-3">
                      <p className="user-name mb-0 text-white">Pauline Seitz</p>
                      <p className="designattion mb-0">Web Designer</p>
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-user" /><span>Profile</span></a>
                    </li>
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-cog" /><span>Settings</span></a>
                    </li>
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-home-circle" /><span>Dashboard</span></a>
                    </li>
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-dollar-circle" /><span>Earnings</span></a>
                    </li>
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-download" /><span>Downloads</span></a>
                    </li>
                    <li>
                      <div className="dropdown-divider mb-0" />
                    </li>
                    <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-log-out-circle" /><span>Logout</span></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          {/*end header */}
          {/*start page wrapper */}
          <div className="page-wrapper">
            <div className="page-content">
              <div className="dash-wrapper bg-dark">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 row-cols-xxl-5">
                  <div className="col border-end border-light-2">
                    <div className="card bg-transparent shadow-none mb-0">
                      <div className="card-body text-center">
                        <p className="mb-1 text-white">Sessions</p>
                        <h3 className="mb-3 text-white">876</h3>
                        <p className="font-13 text-white"><span className="text-success"><i className="lni lni-arrow-up" />2.1%</span> vs last 7 days</p>
                        <div id="chart1" />
                      </div>
                    </div>
                  </div>
                  <div className="col border-end border-light-2">
                    <div className="card bg-transparent shadow-none mb-0">
                      <div className="card-body text-center">
                        <p className="mb-1 text-white">Total Users</p>
                        <h3 className="mb-3 text-white">4.5M</h3>
                        <p className="font-13 text-white"><span className="text-success"><i className="lni lni-arrow-up" /> 4.2% </span> last 7 days</p>
                        <div id="chart2" />
                      </div>
                    </div>
                  </div>
                  <div className="col border-end border-light-2">
                    <div className="card bg-transparent shadow-none mb-0">
                      <div className="card-body text-center">
                        <p className="mb-1 text-white">Page Views</p>
                        <h3 className="mb-3 text-white">64,835</h3>
                        <p className="font-13 text-white"><span className="text-danger"><i className="lni lni-arrow-down" /> 3.6%</span> vs last 7 days</p>
                        <div id="chart3" />
                      </div>
                    </div>
                  </div>
                  <div className="col border-end border-light-2">
                    <div className="card bg-transparent shadow-none mb-0">
                      <div className="card-body text-center">
                        <p className="mb-1 text-white">Bounce Rate</p>
                        <h3 className="mb-3 text-white">42.68%</h3>
                        <p className="font-13 text-white"><span className="text-success"><i className="lni lni-arrow-up" /> 2.5%</span> vs last 7 days</p>
                        <div id="chart4" />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-transparent shadow-none mb-0">
                      <div className="card-body text-center">
                        <p className="mb-1 text-white">Avg. Session Duration</p>
                        <h3 className="mb-3 text-white">00:04:60</h3>
                        <p className="font-13 text-white"><span className="text-danger"><i className="lni lni-arrow-down" /> 5.2%</span> vs last 7 days</p>
                        <div id="chart5" />
                      </div>
                    </div>
                  </div>
                </div>{/*end row*/}
              </div>
              <div className="row row-cols-1 row-cols-xl-2">
                <div className="col d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-0">Sales Overview</h6>
                        </div>
                        <div className="dropdown ms-auto">
                          <button className="btn btn-white btn-sm radius-10 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            This Month
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">This Week</a></li>
                            <li><a className="dropdown-item" href="#">This Month</a></li>
                            <li><a className="dropdown-item" href="#">This Year</a></li>
                          </ul>
                        </div>
                      </div>
                      <div id="chart6" />
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-0">Visitor Status</h6>
                        </div>
                        <div className="d-flex align-items-center ms-auto font-13 gap-2">
                          <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle text-primary me-1" />New Visitor</span>
                          <span className="border px-1 rounded cursor-pointer"><i className="bx bxs-circle text-sky-light me-1" />Old Visitor</span>
                        </div>
                      </div>
                      <div id="chart7" />
                    </div>
                  </div>
                </div>
              </div>{/*end row*/}
              <div className="row">
                <div className="col-12 col-lg-8 d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-0">Geographic</h6>
                        </div>
                        <div className="font-22 ms-auto"><i className="bx bx-dots-horizontal-rounded" />
                        </div>
                      </div>
                      <div className id="geographic-map" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-0">Impressions By Country</h6>
                        </div>
                        <div className="font-22 ms-auto"><i className="bx bx-dots-horizontal-rounded" />
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-top-countries mb-3 p-3">
                      <div className="row mb-4">
                        <div className="col-2">
                          <img src="assets/images/icons/united-states.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">United States <strong className="float-end">445,85</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-blues" role="progressbar" style={{ width: '86%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-2">
                          <img src="assets/images/icons/germany.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">Germany <strong className="float-end">683,46</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-cosmic" role="progressbar" style={{ width: '66%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-2">
                          <img src="assets/images/icons/canada.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">Canada <strong className="float-end">982,43</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-burning" role="progressbar" style={{ width: '56%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-2">
                          <img src="assets/images/icons/india.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">India <strong className="float-end">852,35</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-lush" role="progressbar" style={{ width: '45%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-2">
                          <img src="assets/images/icons/netherlands.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">Netherlands <strong className="float-end">785,24</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-kyoto" role="progressbar" style={{ width: '38%' }} />
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col-2">
                          <img src="assets/images/icons/malaysia.png" width={42} alt />
                        </div>
                        <div className="col">
                          <p className="mb-2">Malaysia <strong className="float-end">387,56</strong></p>
                          <div className="progress radius-10" style={{ height: 6 }}>
                            <div className="progress-bar bg-gradient-moonlit" role="progressbar" style={{ width: '28%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*end row*/}
              <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                <div className="col d-flex">
                  <div className="card radius-10 p-0 w-100 bg-transparent shadow-none">
                    <div className="card radius-10">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">New Sessions</p>
                            <h5 className="mb-0">54.6%</h5>
                          </div>
                          <div className="widgets-icons bg-light-primary text-primary ms-auto"><i className="bx bxs-cookie" /></div>
                        </div>
                        <div id="chart8" />
                      </div>
                    </div>
                    <div className="card radius-10">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Average Pages</p>
                            <h5 className="mb-0">38.5%</h5>
                          </div>
                          <div className="widgets-icons bg-light-danger text-danger ms-auto"><i className="bx bxs-bookmark-alt-plus" /></div>
                        </div>
                        <div id="chart9" />
                      </div>
                    </div>
                    <div className="card radius-10 mb-0">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div>
                            <p className="mb-0">Cloud Download</p>
                            <h5 className="mb-0">24.5K</h5>
                          </div>
                          <div className="widgets-icons bg-light-success text-success ms-auto"><i className="bx bxs-cloud-download" /></div>
                        </div>
                        <div id="chart10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="card radius-10 w-100">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div>
                          <h6 className="mb-0">Goal Statistics</h6>
                        </div>
                        <div className="font-22 ms-auto"><i className="bx bx-dots-horizontal-rounded" />
                        </div>
                      </div>
                      <div id="chart11" />
                      <div className="row align-items-center py-2">
                        <div className="col-auto">
                          <p className="mb-0">Sales</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">1580</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">875</p>
                        </div>
                        <div className="col">
                          <div className="progress radius-10 mb-0" style={{ height: 6 }}>
                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '85%' }} />
                          </div>
                        </div>
                      </div>{/*end row*/}
                      <div className="row align-items-center py-2">
                        <div className="col-auto">
                          <p className="mb-0">Users</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">1852</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">356</p>
                        </div>
                        <div className="col">
                          <div className="progress radius-10 mb-0" style={{ height: 6 }}>
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '65%' }} />
                          </div>
                        </div>
                      </div>{/*end row*/}
                      <div className="row align-items-center py-2">
                        <div className="col-auto">
                          <p className="mb-0">Visits</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">1280</p>
                        </div>
                        <div className="col-auto">
                          <p className="mb-0">867</p>
                        </div>
                        <div className="col">
                          <div className="progress radius-10 mb-0" style={{ height: 6 }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '45%' }} />
                          </div>
                        </div>
                      </div>{/*end row*/}
                    </div>
                  </div>
                </div>
                <div className="col d-flex">
                  <div className="card radius-10 p-0 w-100 p-3">
                    <div className="card radius-10 shadow-none bg-transparent border">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                          <div id="chart12" />
                          <div className>
                            <p className="mb-0 d-flex align-items-center"><i className="bx bx-male text-danger fs-4" /><span className="mx-2">Male</span><span>65%</span></p>
                            <p className="mb-0 d-flex align-items-center"><i className="bx bx-female text-primary fs-4" /><span className="mx-2">Male</span><span>35%</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card radius-10 mb-0 shadow-none bg-transparent mb-0 border">
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-4">
                          <div>
                            <h6 className="mb-0">Device Type</h6>
                          </div>
                          <div className="font-22 ms-auto"><i className="bx bx-dots-horizontal-rounded" />
                          </div>
                        </div>
                        <div className="row row-cols-3 g-3">
                          <div className="col">
                            <div className="d-flex gap-2">
                              <h4 className="mb-1 d-flex">61 <span className="align-self-start fs-6">%</span></h4>
                              <p className="mb-0 align-self-center text-success">(+8.4%)</p>
                            </div>
                            <p className="mb-0 d-flex align-items-center"><i className="bx bxs-circle text-info fs-6" /><span className="mx-2">Android</span></p>
                          </div>
                          <div className="col">
                            <div className="d-flex gap-2">
                              <h4 className="mb-1 d-flex">28 <span className="align-self-start fs-6">%</span></h4>
                              <p className="mb-0 align-self-center text-danger">(-1.9%)</p>
                            </div>
                            <p className="mb-0 d-flex align-items-center"><i className="bx bxs-circle text-success fs-6" /><span className="mx-2">iOS</span></p>
                          </div>
                          <div className="col">
                            <div className="d-flex gap-2">
                              <h4 className="mb-1 d-flex">11 <span className="align-self-start fs-6">%</span></h4>
                              <p className="mb-0 align-self-center text-success">(+6.8%)</p>
                            </div>
                            <p className="mb-0 d-flex align-items-center"><i className="bx bxs-circle text-warning fs-6" /><span className="mx-2">Other</span></p>
                          </div>
                        </div>
                        <div className="progress radius-10 mt-4" style={{ height: 10 }}>
                          <div className="progress-bar bg-info" role="progressbar" style={{ width: '45%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} />
                          <div className="progress-bar bg-success" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                          <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/*end row*/}
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div id="chart13" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="card radius-10">
                    <div className="card-body">
                      <div id="chart14" />
                    </div>
                  </div>
                </div>
              </div>{/*end row*/}
            </div>
          </div>
          {/*end page wrapper */}
          {/*start overlay*/}
          <div className="search-overlay" />
          <div className="overlay toggle-icon" />
          {/*end overlay*/}
          {/*Start Back To Top Button*/} <a href="javaScript:;" className="back-to-top"><i className="bx bxs-up-arrow-alt" /></a>
          {/*End Back To Top Button*/}
          <footer className="page-footer">
            <p className="mb-0">Copyright © 2021. All right reserved.</p>
          </footer>
        </div>
        {/*end wrapper*/}
        {/*start switcher*/}
        <div className="switcher-wrapper">
          <div className="switcher-btn"> <i className="bx bx-cog bx-spin" />
          </div>
          <div className="switcher-body">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
              <button type="button" className="btn-close ms-auto close-switcher" aria-label="Close" />
            </div>
            <hr />
            <h6 className="mb-0">Theme Styles</h6>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="lightmode" defaultChecked />
                <label className="form-check-label" htmlFor="lightmode">Light</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="darkmode" />
                <label className="form-check-label" htmlFor="darkmode">Dark</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="semidark" />
                <label className="form-check-label" htmlFor="semidark">Semi Dark</label>
              </div>
            </div>
            <hr />
            <div className="form-check">
              <input className="form-check-input" type="radio" id="minimaltheme" name="flexRadioDefault" />
              <label className="form-check-label" htmlFor="minimaltheme">Minimal Theme</label>
            </div>
            <hr />
            <h6 className="mb-0">Header Colors</h6>
            <hr />
            <div className="header-colors-indigators">
              <div className="row row-cols-auto g-3">
                <div className="col">
                  <div className="indigator headercolor1" id="headercolor1" />
                </div>
                <div className="col">
                  <div className="indigator headercolor2" id="headercolor2" />
                </div>
                <div className="col">
                  <div className="indigator headercolor3" id="headercolor3" />
                </div>
                <div className="col">
                  <div className="indigator headercolor4" id="headercolor4" />
                </div>
                <div className="col">
                  <div className="indigator headercolor5" id="headercolor5" />
                </div>
                <div className="col">
                  <div className="indigator headercolor6" id="headercolor6" />
                </div>
                <div className="col">
                  <div className="indigator headercolor7" id="headercolor7" />
                </div>
                <div className="col">
                  <div className="indigator headercolor8" id="headercolor8" />
                </div>
              </div>
            </div>
            <hr />
            <h6 className="mb-0">Sidebar Backgrounds</h6>
            <hr />
            <div className="header-colors-indigators">
              <div className="row row-cols-auto g-3">
                <div className="col">
                  <div className="indigator sidebarcolor1" id="sidebarcolor1" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor2" id="sidebarcolor2" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor3" id="sidebarcolor3" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor4" id="sidebarcolor4" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor5" id="sidebarcolor5" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor6" id="sidebarcolor6" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor7" id="sidebarcolor7" />
                </div>
                <div className="col">
                  <div className="indigator sidebarcolor8" id="sidebarcolor8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end switcher*/}
      </div>


    </>
  );
}

export default App;
