/**
 * Created by dell on 2017/7/28.
 */
import { Row, Column } from '@/layouts/girds'
import { Accordions, AccordionPane } from '@/components/accordions'
import { Alert } from '@/components/alert'
import { Badge } from '@/components/badge'
import { Btn, LinkBtn, BtnGroup, BtnToolbar, BtnDropdown, BtnDropdownDivider } from '@/components/button'
import { Checkbox, CheckboxGroup } from '@/components/checkbox'
import { Datepicker } from '@/components/datepicker'
import { Dropdown, DropdownItem, DropdownDivider } from '@/components/dropdown'
import { Masker } from '@/components/element'
import { Formbox, FormboxGroup } from '@/components/form'
import { Icon, Fa, FaStack } from '@/components/icon'
import { Lable } from '@/components/lable'
import { List, ListItem } from '@/components/list'
import { Modal } from '@/components/modal'
import { Multiselect } from '@/components/multiselect'
import { Navbar, NavbarHeader, NavbarNav, NavbarNavItem, NavbarNavDropdown, NavbarNavDropdownItem, NavbarNavDropdownDivider } from '@/components/navbar'
import { Note } from '@/components/note'
import { Overlay } from '@/components/overlay'
import { Pagination } from '@/components/pagination'
import { Panel } from '@/components/panel'
import { Popover, Popconfirm } from '@/components/popover'
import { Portlet } from '@/components/portlet'
import { ProgressBar } from '@/components/progress'
import { Radio, RadioGroup } from '@/components/radio'
import { RibbonPanel, Ribbon } from '@/components/ribbon'
import { Selectbox } from '@/components/selectbox'
import { StepPanel, Step } from '@/components/step'
import { SwitchBtn, SwitchBtnGroup } from '@/components/switch'
import { Tabs, TabPane } from '@/components/tabs'
import { EasyTable, EasyPagination } from '@/components/table'
import { Textbox } from '@/components/textbox'
import { Tooltip } from '@/components/tooltip'
import { Tree, TreeSelect } from '@/components/tree'
import { Well } from '@/components/well'

const components = {
  Row,
  Column,
  Accordions,
  AccordionPane,
  Alert,
  Badge,
  Btn,
  LinkBtn,
  BtnGroup,
  BtnToolbar,
  BtnDropdown,
  BtnDropdownDivider,
  Checkbox,
  CheckboxGroup,
  Datepicker,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Masker,
  Formbox,
  FormboxGroup,
  Icon,
  Fa,
  FaStack,
  Lable,
  List,
  ListItem,
  Modal,
  Multiselect,
  Navbar,
  NavbarHeader,
  NavbarNav,
  NavbarNavItem,
  NavbarNavDropdown,
  NavbarNavDropdownItem,
  NavbarNavDropdownDivider,
  Note,
  Overlay,
  Pagination,
  Panel,
  Popover,
  Popconfirm,
  Portlet,
  ProgressBar,
  Radio,
  RadioGroup,
  RibbonPanel,
  Ribbon,
  Selectbox,
  StepPanel,
  Step,
  SwitchBtn,
  SwitchBtnGroup,
  EasyTable,
  EasyPagination,
  Tabs,
  TabPane,
  Textbox,
  Tooltip,
  Tree,
  TreeSelect,
  Well
}

components.install = (Vue) => {
  for (let name in components) {
    Vue.component(name, components[name])
  }
}

export default components
