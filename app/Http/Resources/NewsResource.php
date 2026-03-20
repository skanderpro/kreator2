<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at,
            'image' => !empty($this->image) ? Storage::url($this->image) : null,
            'cover' => !empty($this->cover) ? Storage::url($this->cover) : null,
            'title' => $this->title,
            'content' => $this->content,
            'excerpt' => $this->excerpt,
        ];
    }
}
