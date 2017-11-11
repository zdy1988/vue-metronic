<template>
  <row>
    <column :md="12">
      <tabs mode="line">
        <tab-pane name="Square Buttons" cur>
          <row>
            <column :md="6">
              <portlet title="BUTTONS" summary="tasks summary..." theme="light" bordered color="green-sharp" klass="util-btn-margin-bottom-5">
                <div class="clearfix">
                  <h4 class="block">Default Bootstrap Buttons(Customized to Match state Style)</h4>
                  <btn state="default">Default</btn>
                  <btn state="primary" >Primary</btn>
                  <btn state="success" >Success</btn>
                  <btn state="info" >Info</btn>
                  <btn state="warning" >Warning</btn>
                  <btn state="danger" >Danger</btn>
                  <btn state="link" >Link</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Custom Buttons</h4>
                  <p>
                    <btn >default</btn>
                    <btn color="default" >default</btn>
                    <btn color="red" >red</btn>
                    <btn color="blue" >blue</btn>
                    <btn color="green" >green</btn>
                    <btn color="yellow" >yellow</btn>
                    <btn color="purple" >purple</btn>
                    <btn color="dark" >dark</btn>
                    <btn color="red-mint" >red-mint</btn>
                    <btn color="blue-hoki" >blue-hoki</btn>
                    <btn color="green-haze" >green-haze</btn>
                    <btn color="yellow-mint" >yellow-mint</btn>
                    <btn color="purple-sharp" >purple-sharp</btn>
                    <btn color="grey-mint" >grey-mint</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Outline Buttons</h4>
                  <p>
                    <btn  outline>default</btn>
                    <btn color="default" outline >default</btn>
                    <btn color="red" outline >red</btn>
                    <btn color="blue" outline >blue</btn>
                    <btn color="green" outline >green</btn>
                    <btn color="yellow" outline >yellow</btn>
                    <btn color="purple" outline >purple</btn>
                    <btn color="dark" outline >dark</btn>
                    <btn color="red-mint" outline  >red-mint</btn>
                    <btn color="blue-hoki" outline  >blue-hoki</btn>
                    <btn color="green-haze" outline  >green-haze</btn>
                    <btn color="yellow-mint" outline  >yellow-mint</btn>
                    <btn color="purple-sharp" outline  >purple-sharp</btn>
                    <btn color="grey-mint" outline  >grey-mint</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">More Button Colors(go to
                    <a href="ui_colors.html"> ui_colors.html </a> for more colors) </h4>
                  <p>
                    <btn color="blue-hoki" >Blue Hoki</btn>
                    <btn color="blue-madison" >Blue Madison</btn>
                    <btn color="green-meadow" >Green Meadow</btn>
                    <btn color="red-sunglo" >Red Sunglo</btn>
                    <btn color="yellow-crusta" >Yellow Crusta</btn>
                    <btn color="purple-plum" >Purple Plum</btn>
                    <btn color="grey-cascade" >Grey Cascade</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Stripe</h4>
                  <p>
                    <btn stripe="blue-hoki" color="default" >Blue Hoki</btn>
                    <btn stripe="blue" color="default" >Blue</btn>
                    <btn stripe="green-meadow" color="default" >Green Meadow</btn>
                    <btn stripe="red-sunglo" color="default" >Red Sunglo</btn>
                    <btn stripe="yellow-crusta" color="default" >Yellow Crusta</btn>
                    <btn stripe="purple-plum" color="default" >Purple Plum</btn>
                    <btn stripe="dark" color="default" >Dark</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Disabled</h4>
                  <btn disabled color="default" >default</btn>
                  <btn disabled color="red" >red</btn>
                  <btn disabled color="blue" >blue</btn>
                  <btn disabled color="green" >green</btn>
                  <btn disabled color="yellow" >yellow</btn>
                  <btn disabled color="purple" >purple</btn>
                  <btn disabled color="dark" >dark</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Sizes</h4>
                  <btn size="lg" color="default" >Large button</btn>
                  <btn color="red" >Default button</btn>
                  <btn size="sm" color="blue" >Small button</btn>
                  <btn size="xs" color="green" >Extra small button</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Block Buttons</h4>
                  <btn block state="default" >Button</btn>
                  <btn block color="red" >Button</btn>
                  <btn block color="purple" >Button</btn>
                  <btn block outline color="blue" >Button</btn>
                  <btn block outline color="red" >Button</btn>
                  <btn block outline type="submit" color="purple">Submit</btn>
                  <btn block outline type="submit" color="yellow-mint">Submit</btn>
                  <btn block outline type="submit" color="red-mint">Submit</btn>
                  <btn block outline type="submit" color="green-sharp">Submit</btn>
                </div>
              </portlet>
              <portlet title="ICONIC" icon="globe" summary="tasks summary..." theme="light" bordered color="green-sharp" klass="util-btn-margin-bottom-5">
                <tabs mode="line">
                  <tab-pane name="Fontawesome" cur>
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn color="default" size="lg">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn color="red" size="lg">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn color="blue" size="lg">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn color="green" size="lg">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn color="yellow" size="lg">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn color="purple" size="lg">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn color="green" size="lg">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="lg">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn color="default">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn color="red">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn color="blue">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn color="green">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn color="yellow">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn color="purple">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn color="green">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn color="grey-cascade">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn color="default" size="sm">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn color="red" size="sm">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn color="blue" size="sm">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn color="green" size="sm">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn color="yellow" size="sm">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn color="purple" size="sm">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn color="green" size="sm">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="sm">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn color="default" size="xs">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn color="red" size="xs">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn color="blue" size="xs">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn color="green" size="xs">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn color="yellow" size="xs">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn color="purple" size="xs">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn color="green" size="xs">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="xs">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn color="default" size="icon-only">
                          <fa name="user"></fa>
                        </btn>
                        <btn color="red" size="icon-only">
                          <fa name="edit"></fa>
                        </btn>
                        <btn color="blue" size="icon-only">
                          <fa name="file-o"></fa>
                        </btn>
                        <btn color="green" size="icon-only">
                          <fa name="font"></fa>
                        </btn>
                        <btn color="yellow" size="icon-only">
                          <fa name="search"></fa>
                        </btn>
                        <btn color="purple" size="icon-only">
                          <fa name="times"></fa>
                        </btn>
                        <btn color="green" size="icon-only">
                          <fa name="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="icon-only">
                          <fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Simple Line">
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn color="default" size="lg">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="lg">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn color="blue" size="lg">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn color="yellow" size="lg">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn color="purple" size="lg">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="lg">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn color="default">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn color="red">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn color="blue">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn color="green">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn color="yellow">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn color="purple">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn color="green">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn color="grey-cascade">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn color="default" size="sm">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="sm">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn color="blue" size="sm">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn color="yellow" size="sm">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn color="purple" size="sm">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="sm">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn color="default" size="xs">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="xs">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn color="blue" size="xs">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn color="yellow" size="xs">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn color="purple" size="xs">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="xs">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn color="default" size="icon-only">
                          <icon name="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="icon-only">
                          <icon name="crop"></icon>
                        </btn>
                        <btn color="blue" size="icon-only">
                          <icon name="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <icon name="badge"></icon>
                        </btn>
                        <btn color="yellow" size="icon-only">
                          <icon name="anchor"></icon>
                        </btn>
                        <btn color="purple" size="icon-only">
                          <icon name="bell"></icon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <icon name="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="icon-only">
                          <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Metro">
                    <div class="clearfix">
                      <h4 class="block">Navigation Large Icons Buttons</h4>
                      <btn size="lg" color="default" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapleft"></i>
                      </btn>
                      <btn size="lg" color="green" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn size="lg" color="blue" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapdown m-icon-white"></i>
                      </btn>
                      <btn size="lg" color="dark" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Large Icons Only Buttons</h4>
                      <btn size="lg" color="default" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapleft"></i>
                      </btn>
                      <btn size="lg" color="green" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn size="lg" color="blue" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapdown m-icon-white"></i>
                      </btn>
                      <btn size="lg" color="dark" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Block Large Icons</h4>
                      <btn size="lg" color="blue" block klass="m-icon-big">Button
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn size="lg" color="green" block klass="m-icon-big"> Link
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Defualt Icons Buttons</h4>
                      <btn color="default" klass="m-icon"> Submit
                        <i class="m-icon-swapleft"></i>
                      </btn>
                      <btn color="green" klass="m-icon"> Submit
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn color="blue" klass="m-icon"> Submit
                        <i class="m-icon-swapdown m-icon-white"></i>
                      </btn>
                      <btn color="dark" klass="m-icon"> Submit
                        <i class="m-icon-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Defualt Icons Only Buttons</h4>
                      <btn color="default" klass="m-icon m-icon-only">
                        <i class="m-icon-swapleft"></i>
                      </btn>
                      <btn color="green" klass="m-icon m-icon-only">
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn color="blue" klass="m-icon m-icon-only">
                        <i class="m-icon-swapdown m-icon-white"></i>
                      </btn>
                      <btn color="dark" klass="m-icon m-icon-only">
                        <i class="m-icon-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Block Defualt Icons</h4>
                      <btn color="blue" block klass="m-icon">Button
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn color="green" block klass="m-icon"> Link
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                    </div>
                  </tab-pane>
                </tabs>
              </portlet>
            </column>
            <column :md="6">
              <portlet title="BUTTON GROUPS" icon="settings" color="red" theme="light" bordered>
                <h4 class="block">Basic Example</h4>
                <div class="clearfix">
                  <btn-group>
                    <btn>Left</btn>
                    <btn>Middle</btn>
                    <btn>Right</btn>
                  </btn-group>
                  <btn-group>
                    <btn color="red">Left</btn>
                    <btn color="yellow">Middle</btn>
                    <btn color="green">Right</btn>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Toolbar</h4>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group>
                      <btn>1</btn>
                      <btn>2</btn>
                      <btn>3</btn>
                      <btn>4</btn>
                    </btn-group>
                    <btn-group>
                      <btn>5</btn>
                      <btn>6</btn>
                      <btn>7</btn>
                    </btn-group>
                    <btn-group>
                      <btn>8</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group>
                      <btn color="red">1</btn>
                      <btn color="green">2</btn>
                      <btn color="blue">3</btn>
                      <btn color="yellow">4</btn>
                    </btn-group>
                    <btn-group>
                      <btn color="purple">5</btn>
                      <btn color="dark">6</btn>
                      <btn color="default">7</btn>
                    </btn-group>
                    <btn-group>
                      <btn color="red">8</btn>
                    </btn-group>
                  </btn-toolbar>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Group Sizing</h4>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="lg">
                      <btn color="red">Left</btn>
                      <btn color="green">Middle</btn>
                      <btn color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group>
                      <btn color="red">Left</btn>
                      <btn color="green">Middle</btn>
                      <btn color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="sm">
                      <btn color="red">Left</btn>
                      <btn color="green">Middle</btn>
                      <btn color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="xs">
                      <btn color="red">Left</btn>
                      <btn color="green">Middle</btn>
                      <btn color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                </div>
                <div class="clearfix">
                  <h4 class="block">Nesting Button Group</h4>
                  <btn-group>
                    <btn state="default">
                      <fa name="user"></fa> Profile
                    </btn>
                    <btn state="default">
                      <fa name="cogs"></fa> Settings
                    </btn>
                    <btn state="default">
                      <fa name="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" state="default">
                      <btn color="white">Dropdown link</btn>
                      <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup state="default">
                      <btn color="white">Dropdown link</btn>
                      <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group>
                    <btn color="red">
                      <fa name="user"></fa>  Profile
                    </btn>
                    <btn color="green">
                      <fa name="cogs"></fa>  Settings
                    </btn>
                    <btn color="purple">
                      <fa name="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" color="blue">
                      <btn color="white">Dropdown link</btn>
                      <btn color="red">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup state="default">
                      <btn color="white" @click="doClick">Dropdown link</btn>
                      <btn color="white" @click="doClick">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Orientation Vertical</h4>
                  <btn-group orientation="vertical">
                    <btn>Button</btn>
                    <btn-dropdown text="Actions">
                      <btn color="white" @click="doClick">Button1</btn>
                      <btn color="red" @click="doClick">Button2</btn>
                      <btn @click="doClick">Button3</btn>
                      <btn @click="doClick">Button4</btn>
                    </btn-dropdown>
                    <btn>Button</btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"></div>
                  <btn-group orientation="vertical">
                    <btn color="green">Button</btn>
                    <btn-dropdown color="red" text="Actions">
                      <btn color="white">Button1</btn>
                      <btn color="red">Button2</btn>
                      <btn>Button3</btn>
                      <btn>Button4</btn>
                    </btn-dropdown>
                    <btn color="dark">Button</btn>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Justified Link Variation</h4>
                  <btn-group justified>
                    <link-btn>Left</link-btn>
                    <link-btn>Middle</link-btn>
                    <link-btn>Right</link-btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group justified>
                    <link-btn @click="doClick" color="red">Left</link-btn>
                    <link-btn @click="doClick" color="blue">Middle</link-btn>
                    <link-btn @click="doClick" color="green">Right</link-btn>
                  </btn-group>
                </div>
              </portlet>
              <portlet title="DROPDOWNS" icon="settings" color="green-sharp" theme="light" bordered>
                <h4 class="block">Dropdown buttons</h4>
                <btn-dropdown text="Tools" state="default" textAlign="left">
                  <btn color="white">Settings</btn>
                  <btn color="white">Preferences</btn>
                  <btn color="white">Window Options</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                  <btn color="white">Help</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="red" textAlign="left">
                  <btn color="white">Action</btn>
                  <btn color="white">Another action</btn>
                  <btn color="white">Something else here</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                  <btn color="white">Separated link</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="purple" textAlign="left">
                  <btn color="white">Action</btn>
                  <btn color="white">Another action</btn>
                  <btn color="white">Something else here</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                  <btn color="white">Separated link</btn>
                </btn-dropdown>
                <h4 class="block">Dropdown button with icons</h4>
                <btn-toolbar>
                  <btn-dropdown text="User" icon="user" textAlign="left">
                    <btn color="white">Edit</btn>
                    <btn color="white">Delete</btn>
                    <btn color="white">Ban</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Make admin</btn>
                  </btn-dropdown>
                  <btn-dropdown text="User" color="purple" icon="user" textAlign="left">
                    <btn color="white">
                      <fa name="plus"></fa> Add
                    </btn>
                    <btn color="white">
                      <fa name="edit"></fa> Edit
                    </btn>
                    <btn color="white">
                      <fa name="remove"></fa> Delete
                    </btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">
                      Full Settings
                    </btn>
                  </btn-dropdown>
                </btn-toolbar>
              </portlet>
              <portlet title="BUTTON DROPDOWNS" icon="settings" color="green-sharp" theme="light" bordered klass="util-btn-group-margin-bottom-5">
                <div class="clearfix">
                  <h4 class="block">Default Bootstrap Style</h4>
                  <btn-dropdown text="" textAlign="left">
                    <btn slot="before">Default</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="primary" textAlign="left">
                    <btn slot="before" state="primary">Primary</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="success" textAlign="left">
                    <btn slot="before" state="success">Success</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="info" textAlign="left">
                    <btn slot="before" state="info">Info</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="warning" textAlign="left">
                    <btn slot="before" state="warning">Warning</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="danger" textAlign="left">
                    <btn slot="before" state="danger">Danger</btn>
                    <btn color="white">Settings</btn>
                    <btn color="white">Preferences</btn>
                    <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Help</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Style</h4>
                  <btn-dropdown color="default">
                    <btn color="default" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="blue">
                    <btn color="blue" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="green">
                    <btn color="green" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="red">
                    <btn color="red" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="yellow">
                    <btn color="yellow" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="dark">
                    <btn color="dark" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="purple">
                    <btn color="purple" slot="before">Default</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Dropdowns with Multilevel Submenu</h4>
                  <btn-dropdown color="blue">
                    <btn color="blue" slot="before">Dropdown</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="green" dropup>
                    <btn color="green" slot="before">Dropup</btn>
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Sizing</h4>
                  <btn-dropdown text="Large button" size="lg">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Small button" size="sm">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Extra Small button" size="xs">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <div class="clearfix margin-bottom-10"> </div>
                  <!-- Large button group -->
                  <btn-dropdown text="Large button" color="red" size="lg">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Small button" color="blue" size="sm">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Extra Small button" color="green" size="xs">
                    <btn color="white">Action</btn>
                    <btn color="white">Another action</btn>
                    <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                    <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
              </portlet>
              <portlet title="Button States" icon="settings" color="green-sharp" theme="light" bordered>
                <h4>Loading State</h4>
                <div class="clearfix">
                  <btn state="primary" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                  <btn state="default" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                  <btn color="red" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                  <btn color="blue" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                </div>
              </portlet>
            </column>
          </row>
        </tab-pane>
        <tab-pane name="Circle Buttons">
          <row>
            <column :md="6">
              <portlet title="BUTTONS" summary="tasks summary..." theme="light" bordered color="green-sharp" klass="util-btn-margin-bottom-5">
                <div class="clearfix">
                  <h4 class="block">Default Bootstrap Buttons(Customized to Match state Style)</h4>
                  <btn shape="circle" state="default">Default</btn>
                  <btn shape="circle" state="primary" >Primary</btn>
                  <btn shape="circle" state="success" >Success</btn>
                  <btn shape="circle" state="info" >Info</btn>
                  <btn shape="circle" state="warning" >Warning</btn>
                  <btn shape="circle" state="danger" >Danger</btn>
                  <btn shape="circle" state="link" >Link</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Custom Buttons</h4>
                  <p>
                    <btn shape="circle">default</btn>
                    <btn shape="circle" color="default" >default</btn>
                    <btn shape="circle" color="red" >red</btn>
                    <btn shape="circle" color="blue" >blue</btn>
                    <btn shape="circle" color="green" >green</btn>
                    <btn shape="circle" color="yellow" >yellow</btn>
                    <btn shape="circle" color="purple" >purple</btn>
                    <btn shape="circle" color="dark" >dark</btn>
                    <btn shape="circle" color="red-mint" >red-mint</btn>
                    <btn shape="circle" color="blue-hoki" >blue-hoki</btn>
                    <btn shape="circle" color="green-haze" >green-haze</btn>
                    <btn shape="circle" color="yellow-mint" >yellow-mint</btn>
                    <btn shape="circle" color="purple-sharp" >purple-sharp</btn>
                    <btn shape="circle" color="grey-mint" >grey-mint</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Outline Buttons</h4>
                  <p>
                    <btn shape="circle" outline>default</btn>
                    <btn shape="circle" color="default" outline >default</btn>
                    <btn shape="circle" color="red" outline >red</btn>
                    <btn shape="circle" color="blue" outline >blue</btn>
                    <btn shape="circle" color="green" outline >green</btn>
                    <btn shape="circle" color="yellow" outline >yellow</btn>
                    <btn shape="circle" color="purple" outline >purple</btn>
                    <btn shape="circle" color="dark" outline >dark</btn>
                    <btn shape="circle" color="red-mint" outline  >red-mint</btn>
                    <btn shape="circle" color="blue-hoki" outline  >blue-hoki</btn>
                    <btn shape="circle" color="green-haze" outline  >green-haze</btn>
                    <btn shape="circle" color="yellow-mint" outline  >yellow-mint</btn>
                    <btn shape="circle" color="purple-sharp" outline  >purple-sharp</btn>
                    <btn shape="circle" color="grey-mint" outline  >grey-mint</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">More Button Colors(go to
                    <a href="ui_colors.html"> ui_colors.html </a> for more colors) </h4>
                  <p>
                    <btn shape="circle" color="blue-hoki" >Blue Hoki</btn>
                    <btn shape="circle" color="blue-madison" >Blue Madison</btn>
                    <btn shape="circle" color="green-meadow" >Green Meadow</btn>
                    <btn shape="circle" color="red-sunglo" >Red Sunglo</btn>
                    <btn shape="circle" color="yellow-crusta" >Yellow Crusta</btn>
                    <btn shape="circle" color="purple-plum" >Purple Plum</btn>
                    <btn shape="circle" color="grey-cascade" >Grey Cascade</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Stripe</h4>
                  <p>
                    <btn shape="circle" stripe="blue-hoki" color="default" >Blue Hoki</btn>
                    <btn shape="circle" stripe="blue" color="default" >Blue</btn>
                    <btn shape="circle" stripe="green-meadow" color="default" >Green Meadow</btn>
                    <btn shape="circle" stripe="red-sunglo" color="default" >Red Sunglo</btn>
                    <btn shape="circle" stripe="yellow-crusta" color="default" >Yellow Crusta</btn>
                    <btn shape="circle" stripe="purple-plum" color="default" >Purple Plum</btn>
                    <btn shape="circle" stripe="dark" color="default" >Dark</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Disabled</h4>
                  <btn shape="circle" disabled color="default" >default</btn>
                  <btn shape="circle" disabled color="red" >red</btn>
                  <btn shape="circle" disabled color="blue" >blue</btn>
                  <btn shape="circle" disabled color="green" >green</btn>
                  <btn shape="circle" disabled color="yellow" >yellow</btn>
                  <btn shape="circle" disabled color="purple" >purple</btn>
                  <btn shape="circle" disabled color="dark" >dark</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Sizes</h4>
                  <btn shape="circle" size="lg" color="default" >Large button</btn>
                  <btn shape="circle" color="red" >Default button</btn>
                  <btn shape="circle" size="sm" color="blue" >Small button</btn>
                  <btn shape="circle" size="xs" color="green" >Extra small button</btn>
                </div>
                <div class="clearfix">
                  <h4 class="block">Block Buttons</h4>
                  <btn shape="circle" block state="default" >Button</btn>
                  <btn shape="circle" block color="red" >Button</btn>
                  <btn shape="circle" block color="purple" >Button</btn>
                  <btn shape="circle" block outline color="blue" >Button</btn>
                  <btn shape="circle" block outline color="red" >Button</btn>
                  <btn shape="circle" block outline type="submit" color="purple">Submit</btn>
                  <btn shape="circle" block outline type="submit" color="yellow-mint">Submit</btn>
                  <btn shape="circle" block outline type="submit" color="red-mint">Submit</btn>
                  <btn shape="circle" block outline type="submit" color="green-sharp">Submit</btn>
                </div>
              </portlet>
              <portlet title="ICONIC" icon="globe" summary="tasks summary..." theme="light" bordered color="green-sharp" klass="util-btn-margin-bottom-5">
                <tabs mode="line">
                  <tab-pane name="Fontawesome" cur>
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="lg">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn shape="circle" color="red" size="lg">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn shape="circle" color="blue" size="lg">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="lg">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn shape="circle" color="yellow" size="lg">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn shape="circle" color="purple" size="lg">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="lg">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="lg">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn shape="circle" color="default">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn shape="circle" color="red">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn shape="circle" color="blue">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn shape="circle" color="green">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn shape="circle" color="yellow">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn shape="circle" color="purple">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn shape="circle" color="green">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn shape="circle" color="grey-cascade">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="sm">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn shape="circle" color="red" size="sm">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn shape="circle" color="blue" size="sm">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="sm">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn shape="circle" color="yellow" size="sm">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn shape="circle" color="purple" size="sm">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="sm">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="sm">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn shape="circle" color="default" size="xs">
                          Default<fa name="user"></fa>
                        </btn>
                        <btn shape="circle" color="red" size="xs">
                          Red<fa name="edit"></fa>
                        </btn>
                        <btn shape="circle" color="blue" size="xs">
                          Blue<fa name="file-o"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="xs">
                          Green<fa name="font"></fa>
                        </btn>
                        <btn shape="circle" color="yellow" size="xs">
                          Yellow<fa name="search"></fa>
                        </btn>
                        <btn shape="circle" color="purple" size="xs">
                          Purple<fa name="times"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="xs">
                          Green<fa name="plus"></fa>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="xs">
                          Dark<fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="icon-only">
                          <fa name="user"></fa>
                        </btn>
                        <btn shape="circle" color="red" size="icon-only">
                          <fa name="edit"></fa>
                        </btn>
                        <btn shape="circle" color="blue" size="icon-only">
                          <fa name="file-o"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="icon-only">
                          <fa name="font"></fa>
                        </btn>
                        <btn shape="circle" color="yellow" size="icon-only">
                          <fa name="search"></fa>
                        </btn>
                        <btn shape="circle" color="purple" size="icon-only">
                          <fa name="times"></fa>
                        </btn>
                        <btn shape="circle" color="green" size="icon-only">
                          <fa name="plus"></fa>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="icon-only">
                          <fa name="link"></fa>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Simple Line">
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="lg">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn shape="circle" color="red" size="lg">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn shape="circle" color="blue" size="lg">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="lg">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn shape="circle" color="yellow" size="lg">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn shape="circle" color="purple" size="lg">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="lg">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="lg">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn shape="circle" color="default">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn shape="circle" color="red">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn shape="circle" color="blue">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn shape="circle" color="green">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn shape="circle" color="yellow">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn shape="circle" color="purple">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn shape="circle" color="green">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn shape="circle" color="grey-cascade">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="sm">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn shape="circle" color="red" size="sm">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn shape="circle" color="blue" size="sm">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="sm">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn shape="circle" color="yellow" size="sm">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn shape="circle" color="purple" size="sm">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="sm">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="sm">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn shape="circle" color="default" size="xs">
                          Default <icon name="social-dribbble"></icon>
                        </btn>
                        <btn shape="circle" color="red" size="xs">
                          Red <icon name="crop"></icon>
                        </btn>
                        <btn shape="circle" color="blue" size="xs">
                          Blue <icon name="screen-desktop"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="xs">
                          Green <icon name="badge"></icon>
                        </btn>
                        <btn shape="circle" color="yellow" size="xs">
                          Yellow <icon name="anchor"></icon>
                        </btn>
                        <btn shape="circle" color="purple" size="xs">
                          Purple <icon name="bell"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="xs">
                          Green <icon name="present"></icon>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="xs">
                          Dark <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn shape="circle" color="default" size="icon-only">
                          <icon name="social-dribbble"></icon>
                        </btn>
                        <btn shape="circle" color="red" size="icon-only">
                          <icon name="crop"></icon>
                        </btn>
                        <btn shape="circle" color="blue" size="icon-only">
                          <icon name="screen-desktop"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="icon-only">
                          <icon name="badge"></icon>
                        </btn>
                        <btn shape="circle" color="yellow" size="icon-only">
                          <icon name="anchor"></icon>
                        </btn>
                        <btn shape="circle" color="purple" size="icon-only">
                          <icon name="bell"></icon>
                        </btn>
                        <btn shape="circle" color="green" size="icon-only">
                          <icon name="present"></icon>
                        </btn>
                        <btn shape="circle" color="grey-cascade" size="icon-only">
                          <icon name="pin"></icon>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Metro">
                    <div class="clearfix">
                      <h4 class="block">Navigation Large Icons Buttons</h4>
                      <btn shape="circle" size="lg" color="default" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapleft"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="green" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="blue" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapdown m-icon-white"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="dark" klass="m-icon-big">
                        Submit <i class="m-icon-big-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Large Icons Only Buttons</h4>
                      <btn shape="circle" size="lg" color="default" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapleft"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="green" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="blue" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapdown m-icon-white"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="dark" klass="m-icon-big m-icon-only">
                        <i class="m-icon-big-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Block Large Icons</h4>
                      <btn shape="circle" size="lg" color="blue" block klass="m-icon-big">Button
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" size="lg" color="green" block klass="m-icon-big"> Link
                        <i class="m-icon-big-swapright m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Defualt Icons Buttons</h4>
                      <btn shape="circle" color="default" klass="m-icon"> Submit
                        <i class="m-icon-swapleft"></i>
                      </btn>
                      <btn shape="circle" color="green" klass="m-icon"> Submit
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" color="blue" klass="m-icon"> Submit
                        <i class="m-icon-swapdown m-icon-white"></i>
                      </btn>
                      <btn shape="circle" color="dark" klass="m-icon"> Submit
                        <i class="m-icon-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Defualt Icons Only Buttons</h4>
                      <btn shape="circle"color="default" klass="m-icon m-icon-only">
                        <i class="m-icon-swapleft"></i>
                      </btn>
                      <btn shape="circle" color="green" klass="m-icon m-icon-only">
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" color="blue" klass="m-icon m-icon-only">
                        <i class="m-icon-swapdown m-icon-white"></i>
                      </btn>
                      <btn shape="circle" color="dark" klass="m-icon m-icon-only">
                        <i class="m-icon-swapup m-icon-white"></i>
                      </btn>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Navigation Block Defualt Icons</h4>
                      <btn shape="circle" color="blue" block klass="m-icon">Button
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                      <btn shape="circle" color="green" block klass="m-icon"> Link
                        <i class="m-icon-swapright m-icon-white"></i>
                      </btn>
                    </div>
                  </tab-pane>
                </tabs>
              </portlet>
            </column>
            <column :md="6">
              <portlet title="BUTTON GROUPS" icon="settings" color="red" theme="light" bordered>
                <h4 class="block">Basic Example</h4>
                <div class="clearfix">
                  <btn-group shape="circle">
                    <btn>Left</btn>
                    <btn>Middle</btn>
                    <btn>Right</btn>
                  </btn-group>
                  <btn-group shape="circle">
                     <btn color="red">Left</btn>
                     <btn color="yellow">Middle</btn>
                     <btn color="green">Right</btn>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Toolbar</h4>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group shape="circle">
                      <btn>1</btn>
                      <btn>2</btn>
                      <btn>3</btn>
                      <btn>4</btn>
                    </btn-group>
                    <btn-group shape="circle">
                      <btn>5</btn>
                      <btn>6</btn>
                      <btn>7</btn>
                    </btn-group>
                    <btn-group>
                      <btn shape="circle">8</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group>
                       <btn shape="circle" color="red">1</btn>
                       <btn shape="circle" color="green">2</btn>
                       <btn shape="circle" color="blue">3</btn>
                       <btn shape="circle" color="yellow">4</btn>
                    </btn-group>
                    <btn-group>
                       <btn shape="circle" color="purple">5</btn>
                       <btn shape="circle" color="dark">6</btn>
                       <btn shape="circle" color="default">7</btn>
                    </btn-group>
                    <btn-group>
                       <btn shape="circle" color="red">8</btn>
                    </btn-group>
                  </btn-toolbar>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Group Sizing</h4>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="lg">
                       <btn shape="circle" color="red">Left</btn>
                       <btn shape="circle" color="green">Middle</btn>
                       <btn shape="circle" color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group>
                       <btn shape="circle" color="red">Left</btn>
                       <btn shape="circle" color="green">Middle</btn>
                       <btn shape="circle" color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="sm">
                       <btn shape="circle" color="red">Left</btn>
                       <btn shape="circle" color="green">Middle</btn>
                       <btn shape="circle" color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                  <btn-toolbar klass="margin-bottom-10">
                    <btn-group size="xs">
                       <btn shape="circle" color="red">Left</btn>
                       <btn shape="circle" color="green">Middle</btn>
                       <btn shape="circle" color="blue">Right</btn>
                    </btn-group>
                  </btn-toolbar>
                </div>
                <div class="clearfix">
                  <h4 class="block">Nesting Button Group</h4>
                  <btn-group shape="circle">
                     <btn state="default">
                      <fa name="user"></fa> Profile
                    </btn>
                     <btn state="default">
                      <fa name="cogs"></fa> Settings
                    </btn>
                     <btn state="default">
                      <fa name="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" state="default">
                       <btn color="white">Dropdown link</btn>
                       <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup state="default">
                       <btn color="white">Dropdown link</btn>
                       <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group shape="circle">
                     <btn color="red">
                      <fa name="user"></fa>  Profile
                    </btn>
                     <btn color="green">
                      <fa name="cogs"></fa>  Settings
                    </btn>
                     <btn color="purple">
                      <fa name="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" color="blue">
                       <btn shape="circle" color="white">Dropdown link</btn>
                       <btn shape="circle" color="red">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup state="default">
                       <btn shape="circle" color="white" @click="doClick">Dropdown link</btn>
                       <btn shape="circle" color="white" @click="doClick">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Orientation Vertical</h4>
                  <btn-group orientation="vertical" shape="circle">
                    <btn>Button</btn>
                    <btn-dropdown text="Actions">
                       <btn color="white" @click="doClick">Button1</btn>
                       <btn color="red" @click="doClick">Button2</btn>
                       <btn @click="doClick">Button3</btn>
                       <btn @click="doClick">Button4</btn>
                    </btn-dropdown>
                    <btn>Button</btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"></div>
                  <btn-group orientation="vertical" shape="circle">
                    <btn color="green">Button</btn>
                    <btn-dropdown color="red" text="Actions">
                       <btn color="white">Button1</btn>
                       <btn color="red">Button2</btn>
                      <btn>Button3</btn>
                      <btn>Button4</btn>
                    </btn-dropdown>
                    <btn color="dark">Button</btn>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Justified Link Variation</h4>
                  <btn-group justified shape="circle">
                    <link-btn>Left</link-btn>
                    <link-btn>Middle</link-btn>
                    <link-btn>Right</link-btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group justified shape="circle">
                    <link-btn @click="doClick" color="red">Left</link-btn>
                    <link-btn @click="doClick" color="blue">Middle</link-btn>
                    <link-btn @click="doClick" color="green">Right</link-btn>
                  </btn-group>
                </div>
              </portlet>
              <portlet title="DROPDOWNS" icon="settings" color="green-sharp" theme="light" bordered>
                <h4 class="block">Dropdown buttons</h4>
                <btn-dropdown text="Tools" state="default" textAlign="left" shape="circle">
                  <btn color="white">Settings</btn>
                  <btn color="white">Preferences</btn>
                  <btn color="white">Window Options</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                  <btn color="white">Help</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="red" textAlign="left" shape="circle">
                   <btn shape="circle" color="white">Action</btn>
                   <btn shape="circle" color="white">Another action</btn>
                   <btn shape="circle" color="white">Something else here</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                   <btn shape="circle" color="white">Separated link</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="purple" textAlign="left" shape="circle">
                   <btn shape="circle" color="white">Action</btn>
                   <btn shape="circle" color="white">Another action</btn>
                   <btn shape="circle" color="white">Something else here</btn>
                  <btn-dropdown-divider></btn-dropdown-divider>
                   <btn shape="circle" color="white">Separated link</btn>
                </btn-dropdown>
                <h4 class="block">Dropdown button with icons</h4>
                <btn-toolbar>
                  <btn-dropdown text="User" icon="user" textAlign="left" shape="circle">
                     <btn shape="circle" color="white">Edit</btn>
                     <btn shape="circle" color="white">Delete</btn>
                     <btn shape="circle" color="white">Ban</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn shape="circle" color="white">Make admin</btn>
                  </btn-dropdown>
                  <btn-dropdown text="User" color="purple" icon="user" textAlign="left" shape="circle">
                     <btn shape="circle" color="white">
                      <fa name="plus"></fa> Add
                    </btn>
                     <btn shape="circle" color="white">
                      <fa name="edit"></fa> Edit
                    </btn>
                     <btn shape="circle" color="white">
                      <fa name="remove"></fa> Delete
                    </btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn shape="circle" color="white">
                      Full Settings
                    </btn>
                  </btn-dropdown>
                </btn-toolbar>
              </portlet>
              <portlet title="BUTTON DROPDOWNS" icon="settings" color="green-sharp" theme="light" bordered klass="util-btn-group-margin-bottom-5">
                <div class="clearfix">
                  <h4 class="block">Default Bootstrap Style</h4>
                  <btn-dropdown text="" textAlign="left" shape="circle">
                     <btn slot="before">Default</btn>
                     <btn color="white">Settings</btn>
                     <btn color="white">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="primary" textAlign="left" shape="circle">
                     <btn slot="before" state="primary">Primary</btn>
                     <btn color="white">Settings</btn>
                     <btn color="white">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="success" textAlign="left" shape="circle">
                     <btn slot="before" state="success">Success</btn>
                     <btn color="white">Settings</btn>
                     <btn color="white">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="info" textAlign="left" shape="circle">
                     <btn slot="before" state="info">Info</btn>
                     <btn color="white">Settings</btn>
                     <btn color="white">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="warning" textAlign="left" shape="circle">
                     <btn slot="before" state="warning">Warning</btn>
                     <btn color="white">Settings</btn>
                     <btn color="white">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                  <btn-dropdown text="" state="danger" textAlign="left" shape="circle">
                     <btn slot="before" state="danger">Danger</btn>
                     <btn color="white">Settings</btn>
                     <btn color="whte">Preferences</btn>
                     <btn color="white">Window Options</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Help</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Metronic Style</h4>
                  <btn-dropdown color="default"shape="circle">
                     <btn color="default" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="blue" shape="circle">
                     <btn color="blue" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="green" shape="circle">
                     <btn color="green" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="red" shape="circle">
                     <btn color="red" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="yellow" shape="circle">
                     <btn color="yellow" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="dark" shape="circle">
                     <btn color="dark" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="purple" shape="circle">
                     <btn color="purple" slot="before">Default</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Dropdowns with Multilevel Submenu</h4>
                  <btn-dropdown color="blue" shape="circle">
                     <btn color="blue" slot="before">Dropdown</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown color="green" dropup shape="circle">
                     <btn color="green" slot="before">Dropup</btn>
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
                <div class="clearfix">
                  <h4 class="block">Sizing</h4>
                  <btn-dropdown text="Large button" size="lg" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Small button" size="sm" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Extra Small button" size="xs" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <div class="clearfix margin-bottom-10"> </div>
                  <!-- Large button group -->
                  <btn-dropdown text="Large button" color="red" size="lg" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Small button" color="blue" size="sm" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                  <btn-dropdown text="Extra Small button" color="green" size="xs" shape="circle">
                     <btn color="white">Action</btn>
                     <btn color="white">Another action</btn>
                     <btn color="white">Something else here</btn>
                    <btn-dropdown-divider></btn-dropdown-divider>
                     <btn color="white">Separated link</btn>
                  </btn-dropdown>
                </div>
              </portlet>
              <portlet title="Button States" icon="settings" color="green-sharp" theme="light" bordered>
                <h4>Loading State</h4>
                <div class="clearfix">
                   <btn shape="circle" state="primary" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                   <btn shape="circle" state="default" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                   <btn shape="circle" color="red" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                   <btn shape="circle" color="blue" @click="showLoading" :loading="loading" loading-text="加载中...">Default</btn>
                </div>
              </portlet>
            </column>
          </row>
        </tab-pane>
      </tabs>
    </column>
  </row>
</template>
<style>
  .util-btn-group-margin-bottom-5 .btn-group, .util-btn-margin-bottom-5 .btn{
    margin-bottom: 5px!important;
  }
</style>
<script>
  export default{
    data () {
      return {
        loading: false
      }
    },
    methods: {
      doClick () {
        console.log('test')
      },
      showLoading () {
        var _this = this
        this.loading = true
        setTimeout(function () {
          _this.loading = false
        }, 2000)
      }
    }
  }
</script>
