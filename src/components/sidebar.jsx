const SideBar = ({selectedTab ,setSelectedTab}) => {

  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{width: "280px"}}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg class="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg>
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item"
        onClick={()=>{setSelectedTab("Home");}}>
          <a href="#" class={`nav-link text-white ${selectedTab === "Home" && "active"}`} aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
          Home
          </a>
        </li >
        <hr/>
        <li onClick={()=>{setSelectedTab("Create Post");}}>
          <a href="#" class={`nav-link text-white ${selectedTab === "Create Post" && 'active'}`}>
            <svg class="bi pe-none me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
        <hr />
      </ul>
      <hr />
      <div class="dropdown">
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
