import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import {
  ImageCropper,
  ImageCropperFlip,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRotate,
  ImageCropperSelection,
  ImageCropperViewport,
  ImageCropperZoom,
} from "@/components/ui/image-cropper"

test("every part is named in Japanese", () => {
  render(
    <ImageCropper aria-label="証明写真の切り抜き" src="data:image/png;base64,">
      <ImageCropperViewport>
        <ImageCropperImage alt="証明写真" />
        <ImageCropperSelection>
          <ImageCropperHandle position="nw" />
          <ImageCropperHandle position="se" />
        </ImageCropperSelection>
      </ImageCropperViewport>
      <ImageCropperZoom />
      <ImageCropperRotate />
      <ImageCropperFlip />
      <ImageCropperFlip direction="vertical" />
    </ImageCropper>,
  )

  expect(screen.getByRole("group", { name: "証明写真の切り抜き" })).toBeTruthy()
  expect(screen.getByRole("slider", { name: "拡大率" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "右に90度回転" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "左右反転" })).toBeTruthy()
  expect(screen.getByRole("button", { name: "上下反転" })).toBeTruthy()

  // The selection and handles stay hidden until the image loads, which jsdom never does.
  const selection = document.querySelector(
    '[data-slot="image-cropper-selection"]',
  )
  expect(selection?.getAttribute("aria-label")).toBe("切り抜き範囲")
  expect(selection?.getAttribute("aria-roledescription")).toBe("切り抜き範囲")
  const handles = [
    ...document.querySelectorAll('[data-slot="image-cropper-handle"]'),
  ].map((handle) => handle.getAttribute("aria-label"))
  expect(handles).toEqual(["切り抜き範囲の左上の角", "切り抜き範囲の右下の角"])
  expect(
    document
      .querySelector('[data-slot="image-cropper-handle"]')
      ?.getAttribute("aria-roledescription"),
  ).toBe("サイズ変更ハンドル")
})
