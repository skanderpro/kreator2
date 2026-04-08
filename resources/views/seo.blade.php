@use(App\Models\SeoMeta)

@php
    /** @var SeoMeta|null $meta */
@endphp

<meta http-equiv="X-UA-Compatible" content="ie=edge">

@if(!empty($meta?->description))
    <meta name="description" content="{{ $meta->description }}">
@endif

@if(!empty($meta?->title))
    <meta name="title" content="{{ $meta->title }}">
@endif

@if(!empty($meta?->keywords))
    <meta name="keywords" content="{{ $meta->keywords }}">
@endif

@if(!empty($meta?->canonical))
    <link rel="canonical" href="{{ $meta->canonical }}">
@endif

@if(!empty($meta?->og_title))
    <meta name="og:title" content="{{ $meta->og_title }}">
@endif

@if(!empty($meta?->og_description))
    <meta name="og:description" content="{{ $meta->og_description }}">
@endif

@if(!empty($meta?->og_url))
    <meta name="og:url" content="{{ $meta->og_url }}">
@endif

@if(!empty($meta?->og_image))
    <meta name="og:image" content="{{ $meta->og_image }}">
@endif
