<?php

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function ($any = 'index.html') {
    $fallback = resource_path('frontend/dist/index.html');
    $path = resource_path('frontend/dist/' . $any);

    if (!file_exists($path) || !is_file($path)) {
        $path = $fallback;
    }

    $allowedDir = realpath(resource_path('frontend/dist'));
    $realPath = realpath($path);

    if ($realPath === false || strpos($realPath, $allowedDir) !== 0) {
        $realPath = $fallback;
    }

    $extension = pathinfo($realPath, PATHINFO_EXTENSION);
    $mimeTypes = [
        'html' => 'text/html',
        'htm' => 'text/html',
        'css' => 'text/css',
        'js' => 'application/javascript',
        'json' => 'application/json',
        'xml' => 'application/xml',
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
        'gif' => 'image/gif',
        'svg' => 'image/svg+xml',
        'ico' => 'image/x-icon',
        'pdf' => 'application/pdf',
        'txt' => 'text/plain',
        'woff' => 'font/woff',
        'woff2' => 'font/woff2',
        'ttf' => 'font/ttf',
        'eot' => 'application/vnd.ms-fontobject',
    ];
    $mimeType = isset($mimeTypes[$extension]) ? $mimeTypes[$extension] : 'application/octet-stream';

    $content = file_get_contents($realPath);
    if ($extension === 'html') {
        $seo = view('seo')->render();

        $content = Blade::render($content, [
            'seo' => $seo,
        ]);
    }

    return response()->make($content, 200, [
        'Content-Type' => $mimeType
    ]);
})->where('any', '^(?!admin).*$');

