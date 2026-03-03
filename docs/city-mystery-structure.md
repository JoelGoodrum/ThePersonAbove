# City Mystery Quest Structure Plan

This document translates your story into a practical directory + file plan for this Phaser project.

## Proposed High-Level Directory Structure

```txt
phaser-game/src/
  content/
    dialogue/
      office.ts
      bar.ts
      apartments.ts
      tower.ts
      lab.ts
    items.ts
    quests/
      lylaRescueQuest.ts
  levels/
    cityMap.ts
    interiors/
      pharmacyInterior.ts
      barInterior.ts
      apartment10xInterior.ts
      execTowerLobby.ts
      execTowerServerRoom.ts
      execTowerRoof.ts
      labRoom.ts
  systems/
    inventorySystem.ts
    questSystem.ts
    dialogueSystem.ts
    interactionSystem.ts
    conditionalAccessSystem.ts
  entities/
    npcs/
      officeNpc.ts
      bartenderNpc.ts
      guardNpc.ts
      friendNpc.ts
      scientistNpc.ts
    interactables/
      cigarettePack.ts
      elevator.ts
      ladder.ts
      lever.ts
  state/
    gameFlags.ts
  ui/
    dialogueBox.ts
    objectiveTracker.ts
```

## Minimal Files You Need (in story order)

1. `levels/cityMap.ts`
   - Contains the 3x3 hub map and door links:
     - office ↔ park ↔ pharmacy
     - park ↔ exec tower ↔ park
     - bar ↔ park ↔ apartments

2. `content/quests/lylaRescueQuest.ts`
   - Main quest stage machine (start, clues, key retrieval, tower access, lab ending).

3. `state/gameFlags.ts`
   - Boolean flags and progress markers, for example:
   - `hasTextMessage`, `officeNpcWarnedScam`, `hasCigarettes`, `guardMoved`, `hasSecurityKey`, `hasLabCoat`, `leverPulled`.

4. `systems/inventorySystem.ts`
   - Item add/remove/check methods for cigarettes, security key, lab coat.

5. `systems/dialogueSystem.ts`
   - Structured dialogue playback with conditional branches based on flags.

6. `systems/conditionalAccessSystem.ts`
   - Gate checks:
   - Guard blocks tower without cigarettes.
   - Elevator blocks server room without key.
   - Lab entry blocks without coat.

7. NPC files (`entities/npcs/*.ts`)
   - office NPC: says scam if shown message.
   - bartender: mentions corporation + CEO daughter suspicion.
   - friend in apartment 10x: gives unit code + clue.
   - guard: cigarette trade and movement.

8. Interactable files (`entities/interactables/*.ts`)
   - Cigarette pickup in pharmacy.
   - Elevator keycard lock.
   - Ladder push puzzle on roof.
   - Lever in quantum computer room.

9. Dialogue content files (`content/dialogue/*.ts`)
   - Keep text out of scene logic for easy editing.

10. UI support (`ui/dialogueBox.ts`, `ui/objectiveTracker.ts`)
   - Display current objective and branch hints.

## Quest Flow as Data (recommended)

Create one quest data object in `lylaRescueQuest.ts` with stages:

- `receive_text`
- `validate_message_at_office`
- `investigate_bar`
- `visit_apartment_friend`
- `obtain_security_key`
- `bribe_guard_with_cigarettes`
- `enter_tower`
- `unlock_elevator`
- `obtain_lab_coat`
- `enter_quantum_room`
- `pull_lever_end`

This avoids hardcoding story checks across many scenes.

## How this maps to your existing repo

You already have strong foundations:
- `levels/` for world data
- `systems/` for reusable mechanics
- `entities/` for actors
- `ui/` for HUD and future quest UI

So your story expansion should mainly add data files + a few new systems, not a rewrite.
