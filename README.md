#  KPI Dashboard Industriel
Application personnelle pour mettre en pratique les concepts d'indicateurs industriels
 **[https://ephraim1110.github.io/KPI-Dashboard-Calculator/]** 


##  À quoi ça sert ?

Dans une usine, on ne peut pas améliorer ce qu'on ne mesure pas.
Les KPI (Key Performance Indicators) sont des indicateurs chiffrés qui permettent de :
- Savoir si une machine produit bien
- Détecter les problèmes de qualité
- Mesurer la fiabilité des fournisseurs
- Suivre l'efficacité des actions d'amélioration

Cette application calcule automatiquement ces indicateurs à partir de données saisies par l'utilisateur.

---

##  Fonctionnalités

- Calcul du TRS (Taux de Rendement Synthétique)
- Calcul des indicateurs Qualité produit
- Calcul des KPI Fournisseurs & Supply Chain
-  Calcul des indicateurs Amélioration Continue
-  Affichage coloré selon les seuils (vert / orange / rouge)
-  Interface dark mode responsive

---

##  Les indicateurs expliqués

### 1. TRS — Taux de Rendement Synthétique

> C'est **l'indicateur roi** en industrie. Il mesure l'efficacité globale d'une machine ou d'une ligne de production.

```
TRS = Disponibilité × Performance × Qualité
```

**Exemple concret :**
Imaginons une machine qui doit tourner 8h par jour (480 min).

| Indicateur | Calcul | Exemple |
|---|---|---|
| **Disponibilité** | Temps de marche / Temps planifié | 420 / 480 = **87.5%** |
| **Performance** | Production réelle / Production théorique | 880 / 1000 = **88%** |
| **Qualité** | Pièces conformes / Pièces produites | 850 / 880 = **96.6%** |
| **TRS** | 87.5% × 88% × 96.6% | = **74.3%** |

> **Objectif industrie : TRS > 85%**
> Un TRS de 85% signifie que la machine est utilisée à 85% de son potentiel maximum.
> En dessous de 65% → situation critique, action immédiate requise.

---

### 2. Qualité produit

Ces indicateurs mesurent la qualité de ce qui est produit.

#### PPM (Parts Per Million)
```
PPM = (Nb défauts / Nb pièces) × 1 000 000
```
> C'est le nombre de pièces défectueuses pour 1 million produites.
> **Exemple :** 30 défauts sur 1000 pièces = 30 000 PPM
>  Objectif : le plus bas possible (< 500 PPM en industrie automobile)

#### FPY — First Pass Yield (Rendement au premier coup)
```
FPY = (Pièces conformes du 1er coup / Total pièces) × 100
```
> C'est le % de pièces qui sortent bonnes **du premier coup**, sans retouche.
> **Exemple :** Une pièce qui doit être retouchée avant d'être bonne n'est PAS comptée dans le FPY.
> Objectif : > 95%

#### Taux de rebut
```
Taux de rebut = (Pièces rebutées / Total pièces) × 100
```
> Une pièce rebutée = une pièce irrécupérable, à jeter.
> Objectif : < 1%

#### Taux de retouche
```
Taux de retouche = (Pièces retouchées / Total pièces) × 100
```
> Une pièce retouchée = une pièce qui a nécessité une correction avant d'être bonne.
> Objectif : < 2%

---

### 3. Fournisseurs & Supply Chain

Ces indicateurs mesurent la performance de vos fournisseurs.

#### OTD — On Time Delivery (Livraison à l'heure)
```
OTD = (Livraisons à l'heure / Total livraisons) × 100
```
> **Exemple :** Un fournisseur livre 185 commandes à l'heure sur 200 → OTD = 92.5%
> Objectif : > 95%
> Si un fournisseur livre en retard, toute la chaîne de production est impactée.

#### PPM fournisseur
```
PPM fournisseur = (Pièces défectueuses reçues / Total pièces reçues) × 1 000 000
```
> Même logique que le PPM produit, mais appliqué aux pièces reçues des fournisseurs.

#### Taux de service
```
Taux de service = (Commandes complètes / Total commandes) × 100
```
> Une commande complète = livrée en totalité, sans article manquant.
>  Objectif : > 95%

---

### 4. Amélioration Continue

Ces indicateurs mesurent l'efficacité de la démarche d'amélioration continue (Lean, Kaizen).

#### Efficacité CAPA
```
Efficacité CAPA = (Actions efficaces / Actions clôturées) × 100
```
> CAPA = Corrective And Preventive Action (Actions correctives et préventives)
> Une action est "efficace" si le problème ne réapparaît pas après sa mise en place.
>  Objectif : > 80%

#### Taux de clôture
```
Taux de clôture = (Actions clôturées / Actions totales) × 100
```
> Mesure si les actions d'amélioration sont bien finalisées dans les délais.
>  Objectif : > 80%

#### Taux de récurrence
```
Taux de récurrence = (Problèmes récurrents / Total problèmes) × 100
```
> Un problème récurrent = un problème qui revient malgré une action corrective.
> Plus ce taux est bas, plus les actions correctives sont efficaces.
>  Objectif : < 10%

#### Taux de mise en œuvre des idées (Kaizen)
```
Taux idées = (Idées mises en œuvre / Idées proposées) × 100
```
> Le Kaizen = amélioration continue par petites étapes, grâce aux idées du terrain.
>  Objectif : > 70%

---

##  Références & normes

- **ISO 22514** — Statistiques appliquées, capabilité des processus
- **Lean Manufacturing** — TRS, 5S, Kaizen, SMED
- **Six Sigma** — PPM, DPMO, capabilité
- **AIAG PPAP 4e édition** — Processus d'approbation des pièces de production

---

## Auteur

**Ephraim GOUSSANOU**
Ingénieur Génie Industriel — Méthodes & Industrie 4.0
[LinkedIn](https://www.linkedin.com/in/sena-ephraim/) | [GitHub](https://github.com/Ephraim1110)
