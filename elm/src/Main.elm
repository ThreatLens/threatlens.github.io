module Main exposing (..)

import Browser
import Html exposing (Attribute, div, a, text, h3)
import Html.Attributes exposing (href, property)
import Html.Events exposing (onClick)
import Platform.Cmd as Cmd
import Json.Encode as Encode
import List exposing (map)
import String as S
import Debug
import Platform.Sub exposing (Sub)

type Tab = Identify | Compare | Execute

main = Browser.element { init = tabInit
                       , view = tabView
                       , update = tabUpdate
                       , subscriptions = tabSubs }

tabInit : () -> (Tab, Cmd.Cmd Tab)
tabInit _ = (Identify, Cmd.none)

tabView tab =
    let link t = let tabName = Debug.toString t
                 in a ([ href (S.append "#" (S.toLower tabName)), onClick t ] ++ (if tab == t then [ class "tab-link-selected" ] else []))
                      [ text tabName ]
    in div [ class "tabs" ]
           [ div [ class "tab-links" ] (map link [Identify, Compare, Execute])
           , div [ class "tab-contents" ] [ tabContentView tab ] ]

tabContentView tab =
    case tab of
        -- "Identify Threats"
        Identify -> 
            div []
                [ h3 []
                     [ text "Uncover security holes hiding in your IoT infrastructure." ] ]
        -- "Compare"
        Compare ->
            div []
                [ h3 []
                     [ text "Contrast remedial strategies to lower risk exposure." ] ]
        Execute ->
            div []
                [ h3 []
                     [ text "Correct your network and device deployments with surgical precision." ] ]


tabSubs : Tab -> Sub Tab
tabSubs tab = Sub.none
-- Utilities

tabUpdate : Tab -> Tab -> (Tab, Cmd.Cmd Tab)
tabUpdate newTab prevTab = (newTab, Cmd.none)

class : String -> Attribute msg
class name =
  property "className" (Encode.string name)

-- tabView Identify = tabHtml "Identify" "Uncover security holes hiding in your IoT infrastructure." $ div [] []
-- tabView Compare = tabHtml "Compare" "Contrast remedial strategies to lower risk exposure." $ div [] []
-- tabView Execute = tabHtml "Execute" "Correct your network and device deployments with surgical precision." $ div [] []
-- 
-- tabHtml title 
