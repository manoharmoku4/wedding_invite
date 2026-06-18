#!/usr/bin/env node
/**
 * Generates all 6 event background images using fal.ai Flux Schnell.
 * Requires: FAL_KEY environment variable
 * Usage:    FAL_KEY=your_key node scripts/generate-images.mjs
 */

import { fal } from '@fal-ai/client'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')

const prompts = {
  engagement:
    'Indian couple engagement ceremony, woman in purple gold lehenga with diamond jewelry, man in purple sherwani, purple orchids and roses mandap, fairy lights, golden decorations, illustrated anime digital art style, vibrant, ultra detailed',
  mehndi:
    'Indian couple mehndi ceremony, woman in pastel green pink floral lehenga showing henna hands, man in mint green kurta, lush garden pink white flowers marigold decorations fairy lights golden lanterns, illustrated anime digital art style, soft dreamy, ultra detailed',
  haldi:
    'Indian couple haldi ceremony, woman in bright yellow lehenga with marigold jewelry, man in yellow kurta, bowls of turmeric haldi paste, marigold garlands, yellow flower petals falling, golden sunlight, illustrated anime digital art style, vibrant yellow golden, ultra detailed',
  pellikuthuru:
    'South Indian Telugu bride preparation, woman in orange red half saree gold jewelry jasmine flowers in hair, brass diyas lit, temple pillars, traditional Telugu decor warm orange, illustrated anime digital art style, amber warm lighting, ultra detailed',
  shaadi:
    'Telugu Hindu wedding ceremony, bride in red gold Kanjivaram silk saree heavy gold temple jewelry, groom in cream gold sherwani safa turban, sacred fire agni, jasmine garlands, banana leaves, traditional mandap brass lamps marigolds, illustrated anime digital art style, rich red gold, ultra detailed',
  reception:
    'Indian wedding reception night, woman in royal blue silver sequin gown diamond jewelry, man in navy blue suit, crystal chandeliers, blue purple uplighting, confetti, champagne glasses, modern luxury ballroom, illustrated anime digital art style, glamorous, ultra detailed',
}

async function downloadImage(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status} downloading ${url}`)
  const buf = await res.arrayBuffer()
  writeFileSync(dest, Buffer.from(buf))
}

async function main() {
  const key = process.env.FAL_KEY
  if (!key) {
    console.warn('⚠️   FAL_KEY not set — skipping image generation. Add FAL_KEY to generate images.')
    return
  }

  fal.config({ credentials: key })

  const outDir = join(ROOT, 'public', 'events')
  mkdirSync(outDir, { recursive: true })

  for (const [name, prompt] of Object.entries(prompts)) {
    const dest = join(outDir, `${name}.jpg`)
    if (existsSync(dest)) {
      console.log(`⏭   ${name}.jpg — already exists, skipping`)
      continue
    }

    process.stdout.write(`🎨  Generating ${name}… `)

    try {
      const result = await fal.subscribe('fal-ai/flux/schnell', {
        input: {
          prompt,
          image_size: 'portrait_4_3',
          num_inference_steps: 4,
          num_images: 1,
        },
      })

      const imageUrl = result.data.images[0].url
      await downloadImage(imageUrl, dest)
      console.log('✅ saved')
    } catch (err) {
      console.log(`❌ failed — ${err.message}`)
    }
  }

  console.log('\n🎉  Done! Images saved to public/events/')
  console.log('    Run `npm run dev` to see them in the site.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
