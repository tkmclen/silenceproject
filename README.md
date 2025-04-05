# 🧘‍♂️ The Silence Project

**The Silence Project** is an open-source neuromodulation toolkit designed to help individuals reduce or suppress tinnitus through sound-based self-experimentation. It is grounded in personal success, neuroscience-informed strategies, and a compassionate design philosophy.

This tool began with one goal: help my father hear silence again. Now, it’s here to help others do the same.

---

## 🎯 Purpose

Tinnitus isn't just a sound—it's often a failure of the brain to compute silence. This app provides users with interactive tone generators that can:

- Match their tinnitus pitch
- Gently activate or fatigue specific auditory circuits
- Temporarily suppress or reduce phantom tones
- Explore spatial interference via alternating stereo stimulation

It is based on real experimental success and grounded in research on lateral inhibition, neuroplasticity, and auditory mapping.

---

## 🛠️ Features

- 🎚️ Adjustable **frequency and volume** control
- 🔁 Multiple **pan modes** (left, right, center, alternating)
- 🕹️ Real-time **tone playback** using pure sine waves
- ⏱️ User-defined **alternating pan rate**
- 🌐 Built using **Next.js 14**, **TailwindCSS**, and **Web Audio API**

---

## 🔍 Try It Out

Live version (coming soon):  
**[https://thesilenceproject.org](https://thesilenceproject.org)**

Or preview in Vercel’s visual builder:  
**[v0.dev](https://v0.dev)** + import the components from `/components/ToneTrainer.tsx`

---

## 📂 File Structure

```bash
/components
  ToneTrainer.tsx      # Main interactive component

/app/tone-trainer
  page.tsx             # Route to render the ToneTrainer

/public
  (optional static assets)

README.md              # You're reading it
