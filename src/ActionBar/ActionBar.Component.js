import React from 'react';
import { ActionBar, ActionBarBack, ActionBarHeader, ActionBarActions } from '../';
import { Button, Popover, Menu, MenuList, MenuItem } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';

export const ActionBarComponent = () => {
    const actionBarBackBtnCode = `<ActionBar>
    <ActionBarBack />
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Button type="primary" size="l">
            Button
        </Button>
        <Button type="main" size="l">
            Button
        </Button>
    </ActionBarActions>
</ActionBar>`;

    const actionBarNoBackBtnCode = `<ActionBar>
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Button type="primary" size="l">
            Button
        </Button>
        <Button type="main" size="l">
            Button
        </Button>
    </ActionBarActions>
</ActionBar>`;

    const actionBarContextualCode = `<ActionBar>
    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
    <ActionBarActions>
        <Popover
            control={<Button type="secondary" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    const mobileActionBarCode = `<ActionBar mobile={true}>
    <ActionBarBack />
    <ActionBarHeader title={'Action Bar with description and back button'} />
    <ActionBarActions>
        <Popover
            control={<Button type="secondary" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    const mobileCustomWidthActionBarCode = `<ActionBar mobile={true} width="768px">
    <ActionBarBack />
    <ActionBarHeader title={'Action Bar with description and back button'} />
    <ActionBarActions>
        <Popover
            control={<Button type="secondary" glyph="vertical-grip" />}
            body={
                <Menu>
                    <MenuList>
                        <MenuItem url="/">Option 1</MenuItem>
                        <MenuItem url="/">Option 2</MenuItem>
                        <MenuItem url="/">Option 3</MenuItem>
                        <MenuItem url="/">Option 4</MenuItem>
                    </MenuList>
                </Menu>
            }
        />
    </ActionBarActions>
</ActionBar>`;

    return (
        <div>
            <Header>Action Bar</Header>
            <Description>
                The Action Bar is located at the top of the page and is used for Page title and Main Actions for the
                page.
            </Description>
            <Import module="ActionBar" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    { name: 'mobile', description: 'bool - set to "true" for mobile view of the Action Bar.' },
                    {
                        name: 'width',
                        description: 'string - the width of the Action Bar in mobile view. The default is 319px.'
                    },
                    {
                        name: 'title',
                        description: 'string - the title of the action bar. Specified in ActionBarHeader.'
                    },
                    {
                        name: 'description',
                        description: 'string - Action bar description. Specified in ActionBarHeader.'
                    }
                ]}
            />

            <Separator />

            <h2>Action bar with back button, description and action buttons.</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBarBack />
                    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
                    <ActionBarActions>
                        <Button type="primary" size="l">
                            Button
                        </Button>
                        <Button type="main" size="l">
                            Button
                        </Button>
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarBackBtnCode}</DocsText>

            <Separator />

            <h2>Action bar with no Back button</h2>
            <DocsTile>
                <ActionBar>
                    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
                    <ActionBarActions>
                        <Button type="primary" size="l">
                            Button
                        </Button>
                        <Button type="main" size="l">
                            Button
                        </Button>
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarNoBackBtnCode}</DocsText>

            <Separator />

            <h2>Several Main Actions in a Contextual Menu</h2>
            <Description>
                When there are several main actions for a page, consider displaying them under a contextual menu. This
                allows the user to look in the same position they are used to but avoids cluttering the action bar with
                more than 3-4 actions. This also works well for a responsive/adaptive application.
            </Description>
            <DocsTile>
                <ActionBar>
                    <ActionBarHeader title={'Page Title'} description={'Action Bar Description'} />
                    <ActionBarActions>
                        <Popover
                            control={<Button type="secondary" glyph="vertical-grip" />}
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url="/">Option 1</MenuItem>
                                        <MenuItem url="/">Option 2</MenuItem>
                                        <MenuItem url="/">Option 3</MenuItem>
                                        <MenuItem url="/">Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                        />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{actionBarContextualCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view</h2>
            <DocsTile>
                <ActionBar mobile={true}>
                    <ActionBarBack />
                    <ActionBarHeader
                        title={'Action Bar with description and back button'}
                        description={'Action Bar Description'}
                    />
                    <ActionBarActions>
                        <Popover
                            control={<Button type="secondary" glyph="vertical-grip" />}
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url="/">Option 1</MenuItem>
                                        <MenuItem url="/">Option 2</MenuItem>
                                        <MenuItem url="/">Option 3</MenuItem>
                                        <MenuItem url="/">Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                        />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileActionBarCode}</DocsText>

            <Separator />

            <h2>Action bar mobile view with custom width</h2>
            <DocsTile>
                <ActionBar mobile={true} width="768px">
                    <ActionBarBack />
                    <ActionBarHeader
                        title={'Action Bar with description and back button'}
                        description={'Action Bar Description'}
                    />
                    <ActionBarActions>
                        <Popover
                            control={<Button type="secondary" glyph="vertical-grip" />}
                            body={
                                <Menu>
                                    <MenuList>
                                        <MenuItem url="/">Option 1</MenuItem>
                                        <MenuItem url="/">Option 2</MenuItem>
                                        <MenuItem url="/">Option 3</MenuItem>
                                        <MenuItem url="/">Option 4</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                        />
                    </ActionBarActions>
                </ActionBar>
            </DocsTile>
            <DocsText>{mobileCustomWidthActionBarCode}</DocsText>

            <Separator />
        </div>
    );
};