{{-- This file is used for menu items by any Backpack v7 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title='Logs' icon='la la-terminal' :link="backpack_url('log')" />
<x-backpack::menu-item title='Settings' icon='la la-cog' :link="backpack_url('setting')" />
<x-backpack::menu-item title="Apartments" icon="la la-question" :link="backpack_url('apartment')" />
<x-backpack::menu-item title="Build steps" icon="la la-question" :link="backpack_url('build-step')" />
<x-backpack::menu-item title="Gallery items" icon="la la-question" :link="backpack_url('gallery-item')" />
<x-backpack::menu-item title="News" icon="la la-question" :link="backpack_url('news')" />
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />