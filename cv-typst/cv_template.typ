// ============================================================
// Jhossua Vega — CV template (Typst)
// Parametrized by language; called from cv_es.typ / cv_en.typ
// ============================================================

#let navy = rgb("#163f52")
#let accent = rgb("#bfe3ef")
#let tag-bg = rgb("#2d6f8c")
#let text-dark = rgb("#26323a")
#let text-mid = rgb("#3b4852")
#let text-soft = rgb("#7c8992")
#let rule-light = rgb("#e3e7ea")
#let bar-empty = rgb("#d9e2e6")

#let skill-tag(label) = box(
  fill: tag-bg, radius: 3pt, inset: (x: 6pt, y: 3.2pt),
)[#text(fill: white, size: 7.1pt, weight: 500)[#label]]

#let lang-bar(n, filled) = {
  let items = ()
  for i in range(n) {
    items.push(box(width: 15pt, height: 6pt, radius: 1pt,
      fill: if i < filled { tag-bg } else { bar-empty }))
  }
  stack(dir: ltr, spacing: 3pt, ..items)
}

#let section-title(t) = block(above: 0pt, below: 5pt)[
  #text(size: 10pt, weight: 700, fill: navy, tracking: 1pt)[#upper(t)]
  #line(length: 100%, stroke: 1.1pt + navy)
]

#let edu-item(line1, line2, dates) = block(below: 6pt, spacing: 0pt)[
  #text(size: 9pt, weight: 600, fill: navy)[#line1] \
  #text(size: 8.4pt, fill: text-mid)[#line2] #h(5pt) #text(size: 7.6pt, fill: text-soft)[#dates]
]

#let exp-item(title-line, dates, bullets) = block(below: 10pt, spacing: 0pt)[
  #text(size: 9.2pt, weight: 700, fill: navy)[#title-line] #h(5pt) #text(size: 7.8pt, fill: text-soft)[#dates]
  #v(4pt)
  #for b in bullets [
    #block(below: 4.5pt, spacing: 0pt)[
      #par(leading: 0.6em)[#text(size: 7.9pt, fill: text-dark)[#sym.bullet #h(3pt) #b]]
    ]
  ]
]

#let cert-group(cat, items) = block(below: 9pt, spacing: 0pt)[
  #text(size: 8pt, weight: 700, fill: navy)[#cat]
  #v(3pt)
  #for it in items [
    #block(below: 4pt, spacing: 0pt)[
      #par(leading: 0.62em)[#text(size: 6.9pt, fill: text-mid)[#sym.dot.c #h(2pt) #it]]
    ]
  ]
]

#let ref-item(name, role, cell) = block(below: 4pt, spacing: 0pt)[
  #text(size: 7.9pt, weight: 600, fill: navy)[#name] #text(size: 7.3pt, fill: text-soft)[, #role — #cell]
]

#let cv(
  role: "",
  summary: "",
  portfolio-label: "",
  born-label: "",
  phone: "",
  email: "",
  location: "",
  linkedin: "",
  section-education: "",
  section-experience: "",
  section-skills: "",
  section-languages: "",
  section-certifications: "",
  section-references: "",
  lang-spanish: "",
  lang-english: "",
  education: (),
  experience: (),
  skill-groups: (),
  certifications: (),
  references: (),
) = {
  set page(width: 21cm, height: 29.7cm, margin: 0pt, fill: white)
  set text(font: "Liberation Sans", fill: text-dark)
  set par(leading: 0.58em, spacing: 0.6em)

  // ---------- HEADER ----------
  block(width: 100%, fill: navy, inset: (left: 34pt, right: 34pt, top: 18pt, bottom: 14pt))[
    #grid(columns: (1fr, auto), align: top,
      [
        #text(size: 23pt, weight: 700, fill: white, tracking: 0.5pt)[JHOSSUA VEGA] \
        #text(size: 11.5pt, weight: 300, fill: white)[#role]
      ],
      box(width: 58pt, height: 58pt, radius: 50%, clip: true, stroke: 2.4pt + white)[
        #image("photo.jpg", width: 58pt, height: 58pt, fit: "cover")
      ]
    )
    #v(10pt)
    #grid(columns: (1.7fr, 1fr), gutter: 16pt, align: top,
      [
        #text(size: 8.6pt, weight: 300, fill: white)[#summary]
        #v(5pt)
        #text(size: 8pt, weight: 300, fill: accent)[#portfolio-label: ] #text(size: 8pt, fill: accent)[https://avegac1996.github.io/JhossuaVega/]
      ],
      [
        #set align(right)
        #set text(size: 8pt, weight: 300, fill: white)
        #born-label #h(5pt) #box(width: 4.5pt, height: 4.5pt, radius: 50%, fill: accent) \
        #v(3pt) #phone #h(5pt) #box(width: 4.5pt, height: 4.5pt, radius: 50%, fill: accent) \
        #v(3pt) #email #h(5pt) #box(width: 4.5pt, height: 4.5pt, radius: 50%, fill: accent) \
        #v(3pt) #location #h(5pt) #box(width: 4.5pt, height: 4.5pt, radius: 50%, fill: accent) \
        #v(3pt) #linkedin #h(5pt) #box(width: 4.5pt, height: 4.5pt, radius: 50%, fill: accent)
      ]
    )
  ]

  // ---------- BODY ----------
  grid(columns: (1.5fr, 1.12fr), gutter: 10pt,
    inset: (left: 34pt, right: 34pt, top: 11pt, bottom: 10pt),
    // -- MAIN COLUMN --
    [
      #set par(justify: true)
      #section-title(section-education)
      #for e in education [#edu-item(e.at(0), e.at(1), e.at(2))]

      #v(2pt)
      #section-title(section-experience)
      #for e in experience [#exp-item(e.at(0), e.at(1), e.at(2))]

      #v(2pt)
      #section-title(section-references)
      #grid(columns: (1fr, 1fr), gutter: 10pt, row-gutter: 2.5pt,
        ..references.map(r => ref-item(r.at(0), r.at(1), r.at(2)))
      )
    ],
    // -- SIDE COLUMN --
    [
      #set block(width: 100%)
      #line(start: (-22pt, 0pt), length: 0pt) // noop spacer
      #section-title(section-skills)
      #for g in skill-groups [
        #text(size: 6.9pt, weight: 700, fill: text-soft, tracking: 0.4pt)[#upper(g.at(0))]
        #v(2pt)
        #box(width: 100%)[
          #g.at(1).map(skill-tag).join(h(3.5pt))
        ]
        #v(3pt)
      ]

      #section-title(section-languages)
      #grid(columns: (1fr, auto, 1fr), gutter: 10pt, align: horizon,
        [
          #text(size: 8.3pt, weight: 700, fill: navy)[#lang-spanish]
          #v(2.5pt)
          #lang-bar(5, 5)
        ],
        box(width: 1pt, height: 22pt, fill: rule-light),
        [
          #text(size: 8.3pt, weight: 700, fill: navy)[#lang-english]
          #v(2.5pt)
          #lang-bar(5, 3)
        ],
      )

      #v(4pt)
      #section-title(section-certifications)
      #for c in certifications [#cert-group(c.at(0), c.at(1))]
    ]
  )
}
