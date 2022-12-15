import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Link,
  Image,
} from "@chakra-ui/react";
import styles from "./ButtomNavbar.module.css";

export function ButtomNavbar() {
  return (
    <div style={{ border: "1px solid lightgray" }}>
      <div className={styles.mainDiv}>
        {/* 1st */}

        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Makeup
          </MenuButton>
          <MenuList minWidth="150px">
            <MenuItem className={styles.eachMenuItem}>New Window</MenuItem>
            <MenuItem className={styles.eachMenuItem}>Open Closed Tab</MenuItem>
            <MenuItem className={styles.eachMenuItem}>
              <Link>Open File</Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem className={styles.eachMenuItem}>New Window</MenuItem>
            <MenuItem className={styles.eachMenuItem}>Open Closed Tab</MenuItem>
            <MenuItem className={styles.eachMenuItem}>Open File</MenuItem>
          </MenuList>
        </Menu>

        {/* 1st */}

        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Skin
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>
              <Link>Open File</Link>
            </MenuItem>
            <MenuDivider />
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>

        {/* 3st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Hair
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 4st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Appliances
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 5st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Bath & Body
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 6st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Natural
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 7st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Mom & Baby
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 8st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Health & Wellness
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 9st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Men
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 10st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Fragrance
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        {/* 11st */}
        <Menu isLazy>
          <MenuButton fontSize="11px" color="gray">
            Pop Ups
          </MenuButton>
          <MenuList>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File</MenuItem>
          </MenuList>
        </Menu>
        <Image
          src="https://cdn-icons-png.flaticon.com/128/6213/6213196.png"
          w="7%"
        />
      </div>
    </div>
  );
}
