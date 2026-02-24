<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApartmentResource extends JsonResource
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
            'title' => $this->title,
            'area' => $this->area,
            'living_area' => $this->living_area,
            'rooms' => $this->rooms,
            'building' => $this->building,
            'section' => $this->section,
            'floor' => $this->floor,
            'price' => $this->price,
            'price_for_meter' => $this->price_for_meter,
            'plan' =>  $this->plan,
            'floor_plan' => $this->floor_plan,
            'gen_plan' => $this->gen_plan,
            'created_at' => $this->created_at,
        ];
    }
}
