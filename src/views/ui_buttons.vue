<template>
  <row>
    <column :md="12">
      <tabs mode="line">
        <tab-pane name="Square Buttons" cur>
          <row>
            <column :md="6">
              <portlet title="BUTTONS" summary="tasks summary..." mode="light" bordered color="green-sharp">
                <div class="clearfix">
                  <h4 class="block">Default Bootstrap Buttons(Customized to Match Theme Style)</h4>
                  <btn theme="default" @click="showLoading" :loading="loading" loading-text="加载中..." :loading-animate="true">Default</btn>
                  <btn theme="primary" >Primary</btn>
                  <btn theme="success" >Success</btn>
                  <btn theme="info" >Info</btn>
                  <btn theme="warning" >Warning</btn>
                  <btn theme="danger" >Danger</btn>
                  <btn theme="link" >Link</btn>
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
                  </p>
                  <p>
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
                  </p>
                  <p>
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
                  </p>
                  <p>
                    <btn color="purple-plum" >Purple Plum</btn>
                    <btn color="grey-cascade" >Grey Cascade</btn>
                  </p>
                </div>
                <div class="clearfix">
                  <h4 class="block">Button Stripe</h4>
                  <p>
                    <btn stripe color="blue-hoki" >Blue Hoki</btn>
                    <btn stripe color="blue-madison" >Blue Madison</btn>
                    <btn stripe color="green-meadow" >Green Meadow</btn>
                    <btn stripe color="red-sunglo" >Red Sunglo</btn>
                    <btn stripe color="yellow-crusta" >Yellow Crusta</btn>
                  </p>
                  <p>
                    <btn stripe color="purple-plum" >Purple Plum</btn>
                    <btn stripe color="grey-cascade" >Grey Cascade</btn>
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
                  <btn block theme="default" >Button</btn>
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
              <portlet title="ICONIC" icon="globe" summary="tasks summary..." mode="light" bordered color="green-sharp">
                <tabs mode="line">
                  <tab-pane name="Fontawesome" cur>
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn color="default" size="lg">
                          Default<fa type="user"></fa>
                        </btn>
                        <btn color="red" size="lg">
                          Red<fa type="edit"></fa>
                        </btn>
                        <btn color="blue" size="lg">
                          Blue<fa type="file-o"></fa>
                        </btn>
                        <btn color="green" size="lg">
                          Green<fa type="font"></fa>
                        </btn>
                        <btn color="yellow" size="lg">
                          Yellow<fa type="search"></fa>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="lg">
                          Purple<fa type="times"></fa>
                        </btn>
                        <btn color="green" size="lg">
                          Green<fa type="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="lg">
                          Dark<fa type="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn color="default">
                          Default<fa type="user"></fa>
                        </btn>
                        <btn color="red">
                          Red<fa type="edit"></fa>
                        </btn>
                        <btn color="blue">
                          Blue<fa type="file-o"></fa>
                        </btn>
                        <btn color="green">
                          Green<fa type="font"></fa>
                        </btn>
                        <btn color="yellow">
                          Yellow<fa type="search"></fa>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple">
                          Purple<fa type="times"></fa>
                        </btn>
                        <btn color="green">
                          Green<fa type="plus"></fa>
                        </btn>
                        <btn color="grey-cascade">
                          Dark<fa type="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn color="default" size="sm">
                          Default<fa type="user"></fa>
                        </btn>
                        <btn color="red" size="sm">
                          Red<fa type="edit"></fa>
                        </btn>
                        <btn color="blue" size="sm">
                          Blue<fa type="file-o"></fa>
                        </btn>
                        <btn color="green" size="sm">
                          Green<fa type="font"></fa>
                        </btn>
                        <btn color="yellow" size="sm">
                          Yellow<fa type="search"></fa>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="sm">
                          Purple<fa type="times"></fa>
                        </btn>
                        <btn color="green" size="sm">
                          Green<fa type="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="sm">
                          Dark<fa type="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn color="default" size="xs">
                          Default<fa type="user"></fa>
                        </btn>
                        <btn color="red" size="xs">
                          Red<fa type="edit"></fa>
                        </btn>
                        <btn color="blue" size="xs">
                          Blue<fa type="file-o"></fa>
                        </btn>
                        <btn color="green" size="xs">
                          Green<fa type="font"></fa>
                        </btn>
                        <btn color="yellow" size="xs">
                          Yellow<fa type="search"></fa>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="xs">
                          Purple<fa type="times"></fa>
                        </btn>
                        <btn color="green" size="xs">
                          Green<fa type="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="xs">
                          Dark<fa type="link"></fa>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn color="default" size="icon-only">
                          <fa type="user"></fa>
                        </btn>
                        <btn color="red" size="icon-only">
                          <fa type="edit"></fa>
                        </btn>
                        <btn color="blue" size="icon-only">
                          <fa type="file-o"></fa>
                        </btn>
                        <btn color="green" size="icon-only">
                          <fa type="font"></fa>
                        </btn>
                        <btn color="yellow" size="icon-only">
                          <fa type="search"></fa>
                        </btn>
                        <btn color="purple" size="icon-only">
                          <fa type="times"></fa>
                        </btn>
                        <btn color="green" size="icon-only">
                          <fa type="plus"></fa>
                        </btn>
                        <btn color="grey-cascade" size="icon-only">
                          <fa type="link"></fa>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Simple Line">
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn color="default" size="lg">
                          Default <icon type="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="lg">
                          Red <icon type="crop"></icon>
                        </btn>
                        <btn color="blue" size="lg">
                          Blue <icon type="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <icon type="badge"></icon>
                        </btn>
                        <btn color="yellow" size="lg">
                          Yellow <icon type="anchor"></icon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="lg">
                          Purple <icon type="bell"></icon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <icon type="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="lg">
                          Dark <icon type="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn color="default">
                          Default <icon type="social-dribbble"></icon>
                        </btn>
                        <btn color="red">
                          Red <icon type="crop"></icon>
                        </btn>
                        <btn color="blue">
                          Blue <icon type="screen-desktop"></icon>
                        </btn>
                        <btn color="green">
                          Green <icon type="badge"></icon>
                        </btn>
                        <btn color="yellow">
                          Yellow <icon type="anchor"></icon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple">
                          Purple <icon type="bell"></icon>
                        </btn>
                        <btn color="green">
                          Green <icon type="present"></icon>
                        </btn>
                        <btn color="grey-cascade">
                          Dark <icon type="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn color="default" size="sm">
                          Default <icon type="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="sm">
                          Red <icon type="crop"></icon>
                        </btn>
                        <btn color="blue" size="sm">
                          Blue <icon type="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <icon type="badge"></icon>
                        </btn>
                        <btn color="yellow" size="sm">
                          Yellow <icon type="anchor"></icon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="sm">
                          Purple <icon type="bell"></icon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <icon type="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="sm">
                          Dark <icon type="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn color="default" size="xs">
                          Default <icon type="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="xs">
                          Red <icon type="crop"></icon>
                        </btn>
                        <btn color="blue" size="xs">
                          Blue <icon type="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <icon type="badge"></icon>
                        </btn>
                        <btn color="yellow" size="xs">
                          Yellow <icon type="anchor"></icon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="xs">
                          Purple <icon type="bell"></icon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <icon type="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="xs">
                          Dark <icon type="pin"></icon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn color="default" size="icon-only">
                          <icon type="social-dribbble"></icon>
                        </btn>
                        <btn color="red" size="icon-only">
                          <icon type="crop"></icon>
                        </btn>
                        <btn color="blue" size="icon-only">
                          <icon type="screen-desktop"></icon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <icon type="badge"></icon>
                        </btn>
                        <btn color="yellow" size="icon-only">
                          <icon type="anchor"></icon>
                        </btn>
                        <btn color="purple" size="icon-only">
                          <icon type="bell"></icon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <icon type="present"></icon>
                        </btn>
                        <btn color="grey-cascade" size="icon-only">
                          <icon type="pin"></icon>
                        </btn>
                      </p>
                    </div>
                  </tab-pane>
                  <tab-pane name="Glyphicon">
                    <div class="clearfix">
                      <h4 class="block">Large Buttons</h4>
                      <p>
                        <btn color="default" size="lg">
                          Default <glyphicon type="cog"></glyphicon>
                        </btn>
                        <btn color="red" size="lg">
                          Red <glyphicon type="calendar"></glyphicon>
                        </btn>
                        <btn color="blue" size="lg">
                          Blue <glyphicon type="font"></glyphicon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <glyphicon type="gift"></glyphicon>
                        </btn>
                        <btn color="yellow" size="lg">
                          Yellow <glyphicon type="pencil"></glyphicon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="lg">
                          Purple <glyphicon type="bell"></glyphicon>
                        </btn>
                        <btn color="green" size="lg">
                          Green <glyphicon type="tag"></glyphicon>
                        </btn>
                        <btn color="grey-cascade" size="lg">
                          Dark <glyphicon type="user"></glyphicon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Default Buttons</h4>
                      <p>
                        <btn color="default">
                          Default <glyphicon type="cog"></glyphicon>
                        </btn>
                        <btn color="red">
                          Red <glyphicon type="calendar"></glyphicon>
                        </btn>
                        <btn color="blue">
                          Blue <glyphicon type="font"></glyphicon>
                        </btn>
                        <btn color="green">
                          Green <glyphicon type="gift"></glyphicon>
                        </btn>
                        <btn color="yellow">
                          Yellow <glyphicon type="pencil"></glyphicon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple">
                          Purple <glyphicon type="bell"></glyphicon>
                        </btn>
                        <btn color="green">
                          Green <glyphicon type="tag"></glyphicon>
                        </btn>
                        <btn color="grey-cascade">
                          Dark <glyphicon type="user"></glyphicon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Small Buttons</h4>
                      <p>
                        <btn color="default" size="sm">
                          Default <glyphicon type="cog"></glyphicon>
                        </btn>
                        <btn color="red" size="sm">
                          Red <glyphicon type="calendar"></glyphicon>
                        </btn>
                        <btn color="blue" size="sm">
                          Blue <glyphicon type="font"></glyphicon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <glyphicon type="gift"></glyphicon>
                        </btn>
                        <btn color="yellow" size="sm">
                          Yellow <glyphicon type="pencil"></glyphicon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="sm">
                          Purple <glyphicon type="bell"></glyphicon>
                        </btn>
                        <btn color="green" size="sm">
                          Green <glyphicon type="tag"></glyphicon>
                        </btn>
                        <btn color="grey-cascade" size="sm">
                          Dark <glyphicon type="user"></glyphicon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Extra Small</h4>
                      <p>
                        <btn color="default" size="xs">
                          Default <glyphicon type="cog"></glyphicon>
                        </btn>
                        <btn color="red" size="xs">
                          Red <glyphicon type="calendar"></glyphicon>
                        </btn>
                        <btn color="blue" size="xs">
                          Blue <glyphicon type="font"></glyphicon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <glyphicon type="gift"></glyphicon>
                        </btn>
                        <btn color="yellow" size="xs">
                          Yellow <glyphicon type="pencil"></glyphicon>
                        </btn>
                      </p>
                      <p>
                        <btn color="purple" size="xs">
                          Purple <glyphicon type="bell"></glyphicon>
                        </btn>
                        <btn color="green" size="xs">
                          Green <glyphicon type="tag"></glyphicon>
                        </btn>
                        <btn color="grey-cascade" size="xs">
                          Dark <glyphicon type="user"></glyphicon>
                        </btn>
                      </p>
                    </div>
                    <div class="clearfix">
                      <h4 class="block">Icon Only Buttons</h4>
                      <p>
                        <btn color="default" size="icon-only">
                          <glyphicon type="cog"></glyphicon>
                        </btn>
                        <btn color="red" size="icon-only">
                          <glyphicon type="calendar"></glyphicon>
                        </btn>
                        <btn color="blue" size="icon-only">
                          <glyphicon type="font"></glyphicon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <glyphicon type="gift"></glyphicon>
                        </btn>
                        <btn color="yellow" size="icon-only">
                          <glyphicon type="pencil"></glyphicon>
                        </btn>
                        <btn color="purple" size="icon-only">
                          <glyphicon type="bell"></glyphicon>
                        </btn>
                        <btn color="green" size="icon-only">
                          <glyphicon type="tag"></glyphicon>
                        </btn>
                        <btn color="grey-cascade" size="icon-only">
                          <glyphicon type="user"></glyphicon>
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
              <portlet title="BUTTON GROUPS" icon="settings" color="red" mode="light" bordered>
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
                    <btn theme="default">
                      <fa type="user"></fa> Profile
                    </btn>
                    <btn theme="default">
                      <fa type="cogs"></fa> Settings
                    </btn>
                    <btn theme="default">
                      <fa type="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" theme="default">
                      <btn color="white">Dropdown link</btn>
                      <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup theme="default">
                      <btn color="white">Dropdown link</btn>
                      <btn color="white">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group>
                    <btn color="red">
                      <fa type="user"></fa>  Profile
                    </btn>
                    <btn color="green">
                      <fa type="cogs"></fa>  Settings
                    </btn>
                    <btn color="purple">
                      <fa type="bullhorn"></fa> Feeds
                    </btn>
                    <btn-dropdown text="More" color="blue">
                      <btn color="white">Dropdown link</btn>
                      <btn color="red">Dropdown link</btn>
                    </btn-dropdown>
                    <btn-dropdown text="Up" dropup theme="default">
                      <btn color="white" @click="doClick">Dropdown link</btn>
                      <btn color="white" @click="doClick">Dropdown link</btn>
                    </btn-dropdown>
                  </btn-group>
                </div>
                <div class="clearfix">
                  <h4 class="block">Vertical variation</h4>
                  <btn-group vertical>
                    <btn>Button</btn>
                    <btn-dropdown text="Actions" style="default">
                      <btn color="white" @click="doClick">Button1</btn>
                      <btn color="red" @click="doClick">Button2</btn>
                      <btn @click="doClick">Button3</btn>
                      <btn @click="doClick">Button4</btn>
                    </btn-dropdown>
                    <btn>Button</btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"></div>
                  <btn-group vertical>
                    <btn color="green">Button</btn>
                    <btn-dropdown color="red">
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
                    <btn>Left</btn>
                    <btn>Middle</btn>
                    <btn>Right</btn>
                  </btn-group>
                  <div class="clearfix margin-bottom-10"> </div>
                  <btn-group justified>
                    <btn @click="doClick" color="red">Left</btn>
                    <btn @click="doClick" color="blue">Middle</btn>
                    <btn @click="doClick" color="green">Right</btn>
                  </btn-group>
                </div>
              </portlet>
              <portlet title="DROPDOWNS" icon="settings" color="green-sharp" mode="light" bordered>
                <h4 class="block">Dropdown buttons</h4>
                <btn-dropdown text="Tools" theme="default" textAlign="left">
                  <btn color="white">Settings</btn>
                  <btn color="white">Preferences</btn>
                  <btn color="white">Window Options</btn>
                  <btn color="white">Help</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="red" textAlign="left">
                  <btn color="white">Action</btn>
                  <btn color="white">Another action</btn>
                  <btn color="white">Something else here</btn>
                  <li class="divider"> </li>
                  <btn color="white">Separated link</btn>
                </btn-dropdown>
                <btn-dropdown text="Primary" color="purple" textAlign="left">
                  <btn color="white">Action</btn>
                  <btn color="white">Another action</btn>
                  <btn color="white">Something else here</btn>
                  <li class="divider"> </li>
                  <btn color="white">Separated link</btn>
                </btn-dropdown>
                <h4 class="block">Dropdown button with icons</h4>
                <btn-toolbar>
                  <btn-dropdown text="User" theme="default" icon="user" textAlign="left">
                    <btn color="white">Edit</btn>
                    <btn color="white">Delete</btn>
                    <btn color="white">Ban</btn>
                    <btn color="white">Make admin</btn>
                  </btn-dropdown>
                  <btn-dropdown text="User" color="purple" icon="user" textAlign="left">
                    <btn color="white">
                      <fa type="plus"></fa> Add
                    </btn>
                    <btn color="white">
                      <fa type="edit"></fa> Edit
                    </btn>
                    <btn color="white">
                      <fa type="remove"></fa> Delete
                    </btn>
                    <btn color="white">
                      Full Settings
                    </btn>
                  </btn-dropdown>
                </btn-toolbar>
              </portlet>
            </column>
          </row>
        </tab-pane>
        <tab-pane name="Circle Buttons"></tab-pane>
      </tabs>
    </column>
  </row>
</template>
<script>
  import Row from '@/layouts/girds/row'
  import Column from '@/layouts/girds/column'
  import Icon from '@/components/icon/icon'
  import Fa from '@/components/icon/faicon'
  import Glyphicon from '@/components/icon/glyphicon'
  import Portlet from '@/components/portlet/portlet'
  import Tabs from '@/components/tabs/tabs'
  import TabPane from '@/components/tabs/tab-pane'
  import Btn from '@/components/button/btn'
  import BtnGroup from '@/components/button/btn-group'
  import BtnToolbar from '@/components/button/btn-toolbar'
  import BtnDropdown from '@/components/button/btn-dropdown'

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
    },
    components: {
      Row,
      Column,
      Icon,
      Fa,
      Glyphicon,
      Portlet,
      Tabs,
      TabPane,
      Btn,
      BtnGroup,
      BtnToolbar,
      BtnDropdown
    }
  }
</script>
