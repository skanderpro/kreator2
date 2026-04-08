<?php

namespace App\Providers;

use App\Models\SeoMeta;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->overrideConfigValues();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::creator('seo', function ($view) {
            $view->with('meta', SeoMeta::getMetaForPage(request()->path()));
        });
    }

    protected function overrideConfigValues()
    {
        $config = [];
        if (config('settings.show_powered_by')) {
            $config['backpack.ui.show_powered_by'] = config('settings.show_powered_by') == '1';
        }
        config($config);
    }
}
